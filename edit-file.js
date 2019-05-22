'use strict';

const fs = require('fs');

let args = process.argv;

// Make sure used properly, error if not
if(args.length < 2){
  console.error('Not enough args');
  return; //read: end process, however that needs to happen
}

let sourceFile = args[2];
// let destFile = args[3];
// let operation = args[4];

// Else, do work
for(let i = 2; i < args.length; i++){
  console.log(args[i]);
}

fs.readFile('./files/test.txt', (err, data) => {
  if (err) throw err;
  console.log(data.toString());
  let randomVal = Math.random() * (100 - 1) + 1;

  fs.writeFile('./files/test.txt', randomVal, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');

    fs.readFile('./files/test.txt', (err, data) => {
      if (err) throw err;
      console.log(data.toString());
    });
  });
});



