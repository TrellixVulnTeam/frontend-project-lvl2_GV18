#!/usr/bin/env node

import parser from './parser.js'
import diff from './diff.js'

const genDiff = (filepath1, filepath2) => {
    const json1 = parser(filepath1)
    const json2 = parser(filepath2)
    const difference = `{
${diff(json1, json2)}
}`
    return difference;
}

export default genDiff;