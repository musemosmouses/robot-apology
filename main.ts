import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Robot Apology — two lines, one sentence each.
// Line 1 confesses one specific mistake: the robot misread a pause as the
// end of a voicemail and deleted it. Line 2 states the lesson that follows
// from exactly that mistake, and the behaviour that changes because of it.
const ENTRY_LINES: string[] = [
  "I am sorry I deleted your mother's voicemail because I mistook her long pause for the end of the message.",
  "I learned that silence is not the same as finished, so now I wait for the beep before I delete anything.",
];

const MAX_CHARS = 400;
const MIN_CHARS = 1;

function buildEntry(): string {
  // Exactly two lines, each exactly one sentence; a trailing newline closes
  // the file the way a plain text file is expected to end.
  return ENTRY_LINES.join("\n") + "\n";
}

function main(): void {
  // The grader runs on a read-only filesystem: the ONLY writable path is
  // MAKEFUN_OUTPUT_DIR. Never write to a relative path or process.cwd(),
  // and never remove the output directory itself.
  const outDir = process.env.MAKEFUN_OUTPUT_DIR;
  if (!outDir) {
    throw new Error("MAKEFUN_OUTPUT_DIR is not set");
  }
  const text = buildEntry();
  if (text.length < MIN_CHARS || text.length > MAX_CHARS) {
    throw new Error(`entry is ${text.length} chars, gate allows 1-400`);
  }
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), text, "utf8");
}

main();
