import { readFileSync } from 'fs';

let fs = require('fs')
let a = JSON.parse(fs.readFileSync('../file1.json', 'utf8'));
