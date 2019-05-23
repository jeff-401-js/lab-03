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

/**
 * This wraps the fs module, primarily so that we can more easily write tests around it.
 * @param file
 * @param callback
 */

let contents = [];

const readOne = (file) => {
  return new Promise((resolve, reject) => {
    if(file){
      resolve(fs.readFile( file, (err, data) => {
        if(err) {
          throw err;
        }else{
          console.log('here');
          contents.push(data.toString().trim());
          // console.log(contents);
          // return;
        }
      }));
    }else{
      // console.log('hhhh');
      reject('Bad');
    }
  });
};

/**
 * Reads and returns the contents of 3 files
 * Requires 3 paths, otherwise, it'll fail with aggression
 * @param paths
 */

const readAll = (paths) => {
  // console.log(paths);
  readOne(paths[0])
    .then(readOne(paths[1]))
    .then(readOne(paths[2]))
    .catch(console.error);
    // .then(console.log('jlkjlkj'));

  return contents;
};

console.log(contents);

