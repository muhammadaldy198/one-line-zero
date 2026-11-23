import { mkdirSync, writeFileSync } from "node:fs";

// One Line, Zero Use: The Useless Superpower Sprint (make.fun): one
// original line, at most 200 characters, naming a hilariously useless
// superpower. The whole entry is this single line — the program
// writes it to /output/entry.txt.
//
// The line is a plain constant, so every run writes byte-identical
// output. No trailing newline: the file holds exactly the line, 116
// characters, inside the 1-200 gate — and short on purpose, since an
// exact tie on Judge win rate goes to the smaller text.
const LINE =
  "I can summon any object instantly, as long as it's already in my hand, which makes me unstoppable at holding things.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
