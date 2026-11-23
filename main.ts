// Dad Joke Showdown entry (Node 22, standard library only): it writes one
// dad joke, at most 200 characters, to /output/entry.txt.
// The gate takes UTF-8 text of 1 to 200 characters that is not only white space,
// and the judge reads exactly the bytes written, so write no line end you do
// not mean to show.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The joke: a human GPS, a wrong turn, and the one word every driver knows.
// The pun lands cleanly on the first read, the punchline arrives at the end,
// and it reads naturally aloud across a dinner table. 99 characters, well
// inside the 200-character gate.
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(
  join(OUTPUT_DIR, 'entry.txt'),
  "My wife calls me her human GPS. When I took a wrong turn yesterday, she just said, 'Recalculating.'",
);
