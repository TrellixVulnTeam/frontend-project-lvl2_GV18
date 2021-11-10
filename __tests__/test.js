import { test, expect } from "@jest/globals";
import { fileURLToPath } from "url";
import fs from "fs";
import path from "path";
import genDiff from "../src/index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) =>
  path.join(__dirname, "..", "__fixtures__", filename);
const readFixtureFile = (filename) =>
  fs.readFileSync(getFixturePath(filename), "utf-8").trim();

test("file1.json and file2.json diff", () => {
  const expected = readFixtureFile(`expected_file.txt`);
  const first = `filepath1.json`;
  const second = `filepath2.json`;
  const actual = genDiff(first, second);
  expect(actual).toEqual(expected);
});

// test("file1.yml and file2.yml diff", () => {
//   const expected = readFixtureFile(`expected_file.txt`);
//   const first = `file1.yml`;
//   const second = `file2.yml`;
//   const actual = genDiff(first, second);
//   expect(actual).toEqual(expected);
// });
