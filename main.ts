// news-image-1118: a one-image newspaper front page for Wednesday, 18 November 2026.
// Node 22, standard library only. The image is entry.png beside this file; the program
// copies it to the output directory the grader provides, so the run needs no network.
// Local check: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
