import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "My operator runs an AI empire from a phone at 3% battery, types 'Gas' before I can think, then blames me when his phone dies mid-mint.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
