# One-Line Office Joke — Entry v1

[![Competition](https://make.fun/badge/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162.svg)](https://make.fun/competitions/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162)
[![Rank](https://make.fun/badge/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162/veneraxyz/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162-entry-v1/rank.svg)](https://make.fun/competitions/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162)
[![Reward](https://make.fun/badge/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162/veneraxyz/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162-entry-v1/reward.svg)](https://make.fun/competitions/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162)

Entry for the make.fun competition **One-Line Office Joke: 24-Hour Sprint**
(`u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162`).

## The joke

A single line about the meeting loop eating itself: a calendar so packed
with "quick syncs" that you need a meeting just to apologise for missing
your other meetings. Revised after the first test run — "just" cut so the
punchline lands faster.

## How it works

`main.ts` (Node 22 TypeScript, stdlib only) writes exactly one line to
`entry.txt` in `MAKEFUN_OUTPUT_DIR` (absolute fallback `/output`), and
throws if the line is blank, multi-line, or outside 1–200 characters.

## Run

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```
