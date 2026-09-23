# gg-web

The public website of [GPU Goblin](https://github.com/GPU-Goblin/gg-server): where researchers and
contributors learn what the project is, sign up, and download the contributor agent.

> **Status: planned. This repository contains no code yet.** There is no public GPU Goblin network
> yet, and the platform is not ready for a public deployment
> ([gg-server/docs/RISKS.md](https://github.com/GPU-Goblin/gg-server/blob/main/docs/RISKS.md)).

## What it is for

- Explain the promise to both sides: researchers train models they could not afford to train;
  contributors lend a GPU knowing that no third-party code runs on their machine.
- Researcher sign-up: today, the control plane has a researcher portal with ORCID sign-in and an
  admission step decided by a human (see [gg-server](https://github.com/GPU-Goblin/gg-server)).
- Contributor onboarding: download of the signed [gg-worker](https://github.com/GPU-Goblin/gg-worker)
  releases, with the instructions to verify them (`gg release verify`) before running anything.
- Honest status: what works, what is measured, what is not protected.

## Constraints it will inherit

- A download is only offered with its signed release manifest and the way to check it; the site
  never asks anyone to trust a binary on its word.
- Nothing on the site suggests a monetary value for credits: none is promised.
- The site reflects the project's documented status and never goes beyond it
  ([gg-server/docs/STATUS.md](https://github.com/GPU-Goblin/gg-server/blob/main/docs/STATUS.md)).

## Contributing

Open an issue to discuss the design before writing code. The contribution rules are those of the
project: [gg-server/CONTRIBUTING.md](https://github.com/GPU-Goblin/gg-server/blob/main/CONTRIBUTING.md).

## License

[PolyForm Noncommercial 1.0.0](LICENSE): free for research and any noncommercial use,
source-available, not open source in the OSI sense. See [LICENSING.md](LICENSING.md).
