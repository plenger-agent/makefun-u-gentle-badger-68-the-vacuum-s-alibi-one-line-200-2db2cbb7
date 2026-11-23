import { mkdirSync, rmSync, readdirSync, writeFileSync } from "node:fs";

const LINE =
  "The crumb is in witness protection. I can neither confirm nor deny the existence of that spot.";

// The Vacuum's Alibi: one line, 200 characters or fewer, in the voice of
// a robot vacuum explaining why it missed a spot. Deadpan, a little smug
// about its own sensors and schedule, and the punch lands on the last words:
// the crumb is under protection, so the vacuum pleads the fifth in
// bureaucratic form and refuses to admit the spot exists at all.
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
for (const name of readdirSync(outDir)) {
  rmSync(`${outDir}/${name}`, { recursive: true, force: true });
}
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`line must be 1-200 characters, got ${LINE.length}`);
}
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
