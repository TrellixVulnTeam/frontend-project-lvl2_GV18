import { readFileSync } from "fs";

const parser = (directory) =>
  JSON.parse(readFileSync(`./__fixtures__/${directory}`));
export default parser;
