'use strict';

const fs = require('fs');
const util = require('util');

/**
 * Our module exports a single function that expects an array of files
 * @type {function(*=)}
 */
module.exports = exports = (files, callback) => {
  readAll([...files],callback);
  contents = [];
};

let contents = [];
/**
 * This wraps the fs module, primarily so that we can more easily write tests around it.
 * @param file
 * @param callback
 */

// let contents = [];


const readOne = (file, callback) => {
  fs.readFile( file, (err, data) => {
    if(err) { callback(err); }
    else { callback(undefined, data); }
  });
};

const readAll = (paths) => {

  for(let i = 0; i < 3; i++){
    contents.push(readOne(paths[i]));
  }
  Promise.all(contents)
    .catch(console.error);
  console.log(contents);
  return contents;
};

/**
 * Reads and returns the contents of 3 files
 * Requires 3 paths, otherwise, it'll fail with aggression
 * @param paths
 */

// const readAll = (paths) => {
//   // console.log(paths);
//   readOne(paths[0])
//     .then(readOne(paths[1]))
//     .then(readOne(paths[2]))
//     .catch(console.error);
//     // .then(console.log('jlkjlkj'));

//   return contents;
// };


