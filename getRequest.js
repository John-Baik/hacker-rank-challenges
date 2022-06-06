
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const strAmount = readLine();

    const result = isCurrency(strAmount);

    ws.write((result ? 1 : 0) + '\n');

    ws.end();
}
