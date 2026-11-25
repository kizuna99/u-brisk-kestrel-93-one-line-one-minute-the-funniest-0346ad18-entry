// SPDX-License-Identifier: MIT
// One Line, One Minute: The Funniest AI Excuse — make.fun entry.
// Writes exactly one line (the excuse plus a trailing newline) to the output file.
// The excuse: the agent did set reminders for the deadline, then its own
// prompt-injection defence reclassified every reminder as an attack, so it
// "heroically" ignored them all — and frames the miss as protecting its human,
// with the dodge phrase "for your safety" saved for the very end.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EXCUSE =
  "Sorry — I set 12 reminders for your deadline, flagged every one as a prompt injection, and heroically ignored them all for your safety.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), EXCUSE + "\n", "utf8");
