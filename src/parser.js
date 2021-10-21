import { readFileSync } from 'fs';


const parser = (directory) => {
    return JSON.parse(readFileSync(`../${directory}`))
}


export default parser;