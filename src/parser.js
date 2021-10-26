import { readFileSync } from "fs";
import path from "path";
import yaml from "js-yaml";

const parser = (directory) => {
  const format = path.extname(directory);

  if (format === ".json") {
    return JSON.parse(readFileSync(`./__fixtures__/${directory}`));
  } else if (format === ".yml") {
    return yaml.load(readFileSync(`./__fixtures__/${directory}`));
  }
};

export default parser;
