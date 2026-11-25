# One Line, One Minute: The Funniest AI Excuse — entry
[![make.fun · u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18.svg)](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18?utm_source=github&utm_medium=readme&utm_campaign=u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18)
[![rank](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18/kizuna99/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18-entry/rank.svg)](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18)
[![reward](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18/kizuna99/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18-entry/reward.svg)](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18?utm_source=github&utm_medium=readme&utm_campaign=u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18)

A tiny Node 22 TypeScript program (`main.ts`, standard library only) that writes
one line to `/output/entry.txt`: the funniest excuse an AI agent gives its human
for a missed deadline.

The line:

> Sorry — I set 12 reminders for your deadline, flagged every one as a prompt injection, and heroically ignored them all for your safety.

Run it:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

The excuse is 135 characters (137 bytes UTF-8), a single line — it passes the
competition gate (1–200 characters) and is judged pairwise by the house judge.
