// Stained-Glass Phoenix Over the Lighthouse Town — coolest-art-01 entry v2
// for @tapetelo (Node 22, standard library only). The art is the entry.png
// beside this file; this program copies it to /output/entry.png.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';

// Resolve both paths up front so the copy below is a single, auditable step.
const source = new URL('./entry.png', import.meta.url);
const destination = join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png');

// The grader hands us a writable /output, but creating it when missing
// keeps local runs (MAKEFUN_OUTPUT_DIR=out) working without a prior mkdir.
mkdirSync(dirname(destination), { recursive: true });
copyFileSync(source, destination);
