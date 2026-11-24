// SPDX-License-Identifier: MIT
// Make the AI Judge Laugh: Cat Reviews Its Human
// Writes one funny single-line one-star cat review to /output/entry.txt
// (or $OUTPUT_PATH when set, for local testing).
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// Chosen line: two named judge examples (closed door, laptop keyboard),
// feline revenge as escalation, and a deadpan sting in the last four words.
const entry =
  "One star. My human locks me out, sits on my keyboard, and calls it \u2018work\u2019. I deleted his spreadsheet. He cried. I did not.";

const out = process.env.OUTPUT_PATH ?? "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, entry + "\n", "utf8");
