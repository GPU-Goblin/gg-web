#!/usr/bin/env python3
"""Check one translation of the site: python3 check_lang.py <code>

- i18n/<code>.toml has exactly the keys of i18n/en.toml, with the same {placeholders};
- every content/<page>.md has its content/<page>.<code>.md, whose front matter has the same keys
  and the same untranslated values (template, links, ids, statuses, files, pages, URLs);
- the site builds with English and that language (in a temporary copy: several checks may run at
  once without touching each other's files).
Exits non-zero with the problems listed."""
import os, pathlib, re, shutil, subprocess, sys, tempfile, tomllib

HERE = pathlib.Path(__file__).resolve().parent
code = sys.argv[1]
problems = []

def ph(s):
    return sorted(re.findall(r"\{(\w+)\}", s))

en = tomllib.loads((HERE / "i18n/en.toml").read_text(encoding="utf-8"))
try:
    tr = tomllib.loads((HERE / f"i18n/{code}.toml").read_text(encoding="utf-8"))
except Exception as e:
    sys.exit(f"i18n/{code}.toml: {e}")
for k in ("title", "description"):
    if not tr.get(k):
        problems.append(f"i18n: no {k}")
a, b = set(en["translations"]), set(tr.get("translations", {}))
if a != b:
    problems.append(f"i18n keys: missing {sorted(a - b)}, extra {sorted(b - a)}")
for k in a & b:
    if ph(en["translations"][k]) != ph(tr["translations"][k]):
        problems.append(f"i18n {k}: placeholders differ")

# Values that must stay as they are in every language.
KEEP = {"template", "cta_page", "cta2_page", "cta_url", "cta2_url", "page", "id", "status", "file", "toc", "updated"}

def front(path):
    text = path.read_text(encoding="utf-8")
    m = re.match(r"\+\+\+\n(.*?)\n\+\+\+\n?(.*)", text, re.S)
    if not m:
        raise ValueError("no +++ front matter")
    return tomllib.loads(m.group(1)), m.group(2)

def compare(x, y, where):
    if isinstance(x, dict):
        if not isinstance(y, dict) or set(x) != set(y):
            problems.append(f"{where}: keys differ ({sorted(set(x) ^ set(y if isinstance(y, dict) else {}))})")
            return
        for k in x:
            if k in KEEP and x[k] != y[k]:
                problems.append(f"{where}.{k}: must stay {x[k]!r}, is {y[k]!r}")
            else:
                compare(x[k], y[k], f"{where}.{k}")
    elif isinstance(x, list):
        if not isinstance(y, list) or len(x) != len(y):
            problems.append(f"{where}: list length differs")
            return
        for i, (p, q) in enumerate(zip(x, y)):
            compare(p, q, f"{where}[{i}]")
    elif isinstance(x, str):
        if not isinstance(y, str) or not y.strip():
            problems.append(f"{where}: empty or not text")

for page in sorted((HERE / "content").glob("*.md")):
    if page.name.count(".") > 1:
        continue
    other = page.with_name(page.stem + f".{code}.md")
    if not other.exists():
        problems.append(f"missing {other.name}")
        continue
    try:
        fa, ba = front(page)
        fb, bb = front(other)
    except Exception as e:
        problems.append(f"{other.name}: {e}")
        continue
    compare(fa, fb, other.name)
    # Links to other pages and URLs are kept.
    la = sorted(re.findall(r"\]\((\.\./[a-z]+/|https?://[^)]+|mailto:[^)]+)\)", ba))
    lb = sorted(re.findall(r"\]\((\.\./[a-z]+/|https?://[^)]+|mailto:[^)]+)\)", bb))
    if la != lb:
        problems.append(f"{other.name}: links differ from English ({sorted(set(la) ^ set(lb))})")
    # The same components (texts that switch with the Windows version).
    sa = sorted(re.findall(r"\{\{ *<[a-z]+[^>]*/> *\}\}", ba))
    sb = sorted(re.findall(r"\{\{ *<[a-z]+[^>]*/> *\}\}", bb))
    if sa != sb:
        problems.append(f"{other.name}: shortcodes differ from English ({sorted(set(sa) ^ set(sb))})")
    if ba.count("```") != bb.count("```"):
        problems.append(f"{other.name}: code blocks differ")

if not problems:
    tmp = pathlib.Path(tempfile.mkdtemp(prefix=f"site-{code}-"))
    try:
        shutil.copytree(HERE, tmp / "web", ignore=shutil.ignore_patterns("public", "config.toml"))
        # Only English, French (the 404 page uses both) and the language checked: the other
        # translations, maybe half-written, stay out of this build.
        keep = {"en", "fr", code}
        for f in (tmp / "web/content").glob("*.*.md"):
            if f.name.split(".")[-2] not in keep:
                f.unlink()
        env = dict(os.environ, GG_LANGS=",".join(sorted(keep)))
        env.setdefault("ZOLA", "zola")  # or the path of a zola 0.23 binary, in ZOLA
        r = subprocess.run([sys.executable, str(tmp / "web/build.py"), "build", "--output-dir", str(tmp / "out")],
                           env=env, capture_output=True, text=True)
        if r.returncode != 0:
            problems.append("build failed:\n" + (r.stdout + r.stderr)[-2000:])
    finally:
        shutil.rmtree(tmp, ignore_errors=True)

if problems:
    sys.exit(f"{code}: {len(problems)} problem(s)\n  " + "\n  ".join(problems))
print(f"{code}: ok")
