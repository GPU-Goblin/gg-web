#!/usr/bin/env python3
"""Build the site (GG_LANGS=en,fr for a subset): merge the per-language interface texts (i18n/<code>.toml) into config.toml, check
that every language has every key of English, then run Zola. Usage: python3 build.py [zola args]
(default: build). Zola: ZOLA env var, else `zola` on PATH."""
import os, pathlib, re, subprocess, sys, tomllib

HERE = pathlib.Path(__file__).resolve().parent
base = (HERE / "config.base.toml").read_text(encoding="utf-8")
listed = tomllib.loads((HERE / "i18n" / "languages.toml").read_text(encoding="utf-8"))["languages"]
# GG_LANGS=en,fr builds only those languages (a quick look while translating).
only = [c for c in os.environ.get("GG_LANGS", "").split(",") if c]
if only:
    listed = [l for l in listed if l[0] in only]
langs = [code for code, _ in listed]
base = base.replace("# @LANGUAGES@", "languages = [" + ", ".join(f'["{c}", "{n}"]' for c, n in listed) + "]")
tables = {c: tomllib.loads((HERE / "i18n" / f"{c}.toml").read_text(encoding="utf-8")) for c in langs}
keys = set(tables["en"]["translations"])
problems = []
for c, t in tables.items():
    have = set(t.get("translations", {}))
    if have != keys:
        problems.append(f"{c}: missing {sorted(keys - have)}, extra {sorted(have - keys)}")
    for field in ("title", "description"):
        if not t.get(field):
            problems.append(f"{c}: no {field}")
def q(s):
    return '"' + s.replace("\\", "\\\\").replace('"', '\\"') + '"'

if problems:
    sys.exit("i18n problems:\n  " + "\n  ".join(problems))

base = base.replace("default_language =", f"description = {q(tables['en']['description'])}\ndefault_language =", 1)
out = [base, ""]
# The site's title and description of each language, as texts for the templates too.
for c, t in tables.items():
    t["translations"]["site_title"] = t["title"]
    t["translations"]["site_description"] = t["description"]
out.append("[translations]")
out += [f"{k} = {q(v)}" for k, v in sorted(tables["en"]["translations"].items())]
for c in langs[1:]:
    t = tables[c]
    out += ["", f"[languages.{c}]", f"title = {q(t['title'])}", f"description = {q(t['description'])}",
            "generate_feeds = false", "build_search_index = false", f"[languages.{c}.translations]"]
    out += [f"{k} = {q(v)}" for k, v in sorted(t["translations"].items())]
(HERE / "config.toml").write_text("\n".join(out) + "\n", encoding="utf-8")
# llms.txt from its source: {{NOW:…|WIN:…}} picks the text for extra.windows_available.
windows = "windows_available = true" in base
src = (HERE / "src-assets" / "llms.txt").read_text(encoding="utf-8")
src = re.sub(r"\{\{NOW:(.*?)\|WIN:(.*?)\}\}", lambda m: m.group(2) if windows else m.group(1), src)
(HERE / "static" / "llms.txt").write_text(src, encoding="utf-8")

# llms-full.txt: the English text of every page in one file, for language models.
import re as _re
parts = ["# GPU Goblin — full text of gpugoblin.com (English)\n"]
order = ["_index", "contribute", "research", "security", "faq", "download", "about", "thanks", "privacy", "legal"]
for name in order:
    src = (HERE / "content" / f"{name}.md").read_text(encoding="utf-8")
    m = _re.match(r"\+\+\+\n(.*?)\n\+\+\+\n?(.*)", src, _re.S)
    fm, body = tomllib.loads(m.group(1)), m.group(2)
    url = "https://gpugoblin.com/" + ("" if name == "_index" else name + "/")
    x = fm.get("extra", {})
    parts.append(f"\n\n---\n\n# {x.get('hero_title') or fm['title']}\n\nSource: {url}\n")
    for k in ("hero_lead", "lead"):
        if x.get(k):
            parts.append("\n" + x[k] + "\n")
    for s in x.get("steps", []):
        parts.append(f"\n## {s['title']}\n\n{s['text']}\n")
    for s in x.get("sides", []):
        parts.append(f"\n## {s['title']}\n\n{s['text']}\n" + "".join(f"\n- {p}" for p in s["points"]) + "\n")
    for t in x.get("trust", []):
        parts.append(f"\n## {t['title']}\n\n{t['text']}\n")
    for it in x.get("items", []):
        parts.append(f"\n## {it['name']} ({it['platform']})\n\n{it['text']}\n")
    for f in x.get("faq", []):
        parts.append(f"\n### {f['q']}\n\n{f['a']}\n")
    for g in x.get("groups", []):
        parts.append(f"\n## {g['title']}\n")
        for f in g["items"]:
            parts.append(f"\n### {f['q']}\n\n{f['a']}\n")
    if body.strip():
        en = tables["en"]["translations"]
        body = re.sub(r'\{\{ <os k="(\w+)"[^>]*/> \}\}', lambda m: en[m.group(1) + ("_win" if windows else "_now")], body)
        body = re.sub(r'\{\{ <notify[^>]*/> \}\}', "" if windows else en["win_soon"] + ". " + en["win_notify"], body)
        parts.append("\n" + body.strip() + "\n")
(HERE / "static" / "llms-full.txt").write_text("".join(parts), encoding="utf-8")

zola = os.environ.get("ZOLA", "zola")
args = sys.argv[1:] or ["build"]
sys.exit(subprocess.call([zola, "--root", str(HERE)] + args))
