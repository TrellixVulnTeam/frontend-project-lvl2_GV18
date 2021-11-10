import { getDataFromFile, getFormat } from "./getData.js";
import parser from "./parser.js";
import formatter from "./formatter/index.js";
import build from "./build.js";

const genDiff = (filepath1, filepath2, format = "stylish") => {
  const data1 = parser(getDataFromFile(filepath1), getFormat(filepath1));
  const data2 = parser(getDataFromFile(filepath2), getFormat(filepath2));
  const result = build(data1, data2);
  const diff = formatter(result, format);

  return diff;
};

export default genDiff;
