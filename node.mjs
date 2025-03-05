import os from 'os';
import path from 'path';
import fs from 'fs';
console.log(os.type())
console.log(os.version())
console.log("This is My First Program in NodeJs");

const p="E:3 Year\EVEN\EPAM\path.txt"
const p1="E:3 Year\EVEN\EPAM\add.txt"
console.log(path.basename(p))
console.log(path.dirname(p))
console.log(path.join(p,p1))
fs.readFile(p,'utf-8',(error,data))