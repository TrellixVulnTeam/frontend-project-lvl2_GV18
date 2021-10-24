import { readFileSync } from "fs";

const parser = (directory) => JSON.parse(readFileSync(`../${directory}`));

export default parser;
