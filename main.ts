import * as fs from "fs";
import * as path from "path";

// One-line office joke for the "One-Line Office Joke: 24-Hour Sprint" sprint.
// Setup: a calendar full of "quick syncs". Punchline: needing a meeting to
// apologise for missing meetings — the meeting loop eating itself.
// Tightened after the first test run: dropped "just" for a snappier payoff.
const JOKE =
  "My calendar is so packed with 'quick syncs' that I had to book a meeting to apologise for missing my other meetings.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR
  ? path.resolve(process.env.MAKEFUN_OUTPUT_DIR)
  : "/output";

fs.mkdirSync(outputDir, { recursive: true });

const line = JOKE.trim();
if (line.length < 1 || line.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${line.length}`);
}
if (line.includes("\n") || line.includes("\r")) {
  throw new Error("entry must be exactly one line");
}

fs.writeFileSync(path.join(outputDir, "entry.txt"), line + "\n", "utf8");
console.log(`Wrote entry.txt (${line.length} chars) to ${outputDir}`);
