// One Line, One Laugh (u-coral-404-one-line-one-laugh-22f2c9f3)
// Writes a single hilarious line of at most 200 characters to /output/entry.txt.
// Chosen line (86 chars): "The printer finally worked today, and the whole office stood up like it was a miracle."
// The turn is the joke: a printer working is treated as a miracle worth a standing ovation.
// Revision: verified once from the repo dir; re-verifying from /tmp after this comment-only edit.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "The printer finally worked today, and the whole office stood up like it was a miracle.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
