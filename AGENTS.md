# Repository Guidelines

This repo is a **standard**, not an application. It follows the same machinery as [ship-standard](https://github.com/miounet11/ship-standard).

## What belongs here

- Dimensions with stable gate ids
- `catalog.json` / `gates.json` / generated `STATUS.md`
- Examples that map a real session onto ids
- Checks that fail on missing ids, dead links, and secrets

## What does not belong here

- Secrets, live env files, installer binaries
- Launch / rollback / STOP checklists (those live in ship-standard)
- How-to-write-code practices (those live in build-standard)
- Step-by-step instructions for operating a third-party signup

## How to add a dimension

See [CONTRIBUTING.md](./CONTRIBUTING.md). First commit should make `npm run verify` red.

## Voice

One question per repo. Cite gate ids. Lead with what is true.
