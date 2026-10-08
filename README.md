# gg-web

The public website of [GPU Goblin](https://github.com/GPU-Goblin/gg-server),
[gpugoblin.com](https://gpugoblin.com): what the project is, for contributors who lend their
computer and for researchers who compute on it; the contributor's account; downloads; security;
answers. In fifteen languages.

> **Status:** online, for a project in beta preparation. The site only says what the software does
> today; what is not done yet is said as such.

## What is here

`web/` holds the sources of a static site built with [Zola](https://www.getzola.org) 0.23:

- `content/`: the pages, one file per language (`name.md` in English, `name.<code>.md` otherwise);
- `templates/`: the layout, and `components.html` for the few texts that change with a switch (the
  Windows version: `windows_available` in `config.base.toml`);
- `i18n/`: the interface texts, one file per language;
- `static/`: styles, scripts (the account page talks to the grid's contributor API; no cookie, no
  tracking), images; `llms.txt` is generated from `src-assets/`.

## Building

```bash
cd web
ZOLA=/path/to/zola python3 build.py build --output-dir public   # merges i18n/ into config.toml
python3 check_lang.py fr                                        # keys, placeholders, links, build
```

English and French are written by hand and authoritative; the other languages are machine
translations, to be read by native speakers.

## Rules the site keeps

- It never goes beyond the project's documented status
  ([gg-server/docs/STATUS.md](https://github.com/GPU-Goblin/gg-server/blob/main/docs/STATUS.md)):
  no feature, platform or protection is announced before it works.
- A download is offered only with its signed release and the way to check it.
- Nothing suggests a monetary value for credits: none is promised.
- Plain words for everyone; the technical details live in the documentation.

## Contributing

The contribution rules are those of the project:
[gg-server/CONTRIBUTING.md](https://github.com/GPU-Goblin/gg-server/blob/main/CONTRIBUTING.md).
Corrections of a translation by a native speaker are welcome.

## License

[PolyForm Noncommercial 1.0.0](LICENSE): free for research and any noncommercial use,
source-available, not open source in the OSI sense. See [LICENSING.md](LICENSING.md).
