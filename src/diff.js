import _ from "lodash";

const diff = (a, b) => {

const file1 = a;
const file2 = b;

const keys1 = _.sortBy(Object.keys(file1))
const keys2 = _.sortBy(Object.keys(file2))
const sameKeys = []


for (const key1 of keys1) {
 for (const key2 of keys2) {
     if (key1 === key2) {
         sameKeys.push(key1)
     }
 }
}

const uniq1 = []
const uniq2 = []

for (const key1 of keys1) {
    if (!_.includes(sameKeys, key1)) {
        uniq1.push(key1)
    }
}

for (const key1 of keys2) {
    if (!_.includes(sameKeys, key1)) {
        uniq2.push(key1)
    }
}

let result = ''

// console.log(keys1, keys2, sameKeys, uniq1, uniq2)

const entries1 = Object.entries(file1)
const entries2 = Object.entries(file2)

for (const [key, value] of entries1) {
    if(_.includes(uniq1, key)) {
        result += `-${key}: ${value}
`
    }
}

for (const key of sameKeys) {
    if (file1[key] === file2[key]) {
        result += ` ${key}: ${file1[key]}
`
    } else {
        result += `-${key}: ${file1[key]}
+${key}: ${file2[key]}
`
    }
}

for (const [key, value] of entries2) {
    if(_.includes(uniq2, key)) {
        result += `+${key}: ${value}`
    }
}

return result;
};

export default diff;