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

/**
 * Reads and returns the contents of 3 files
 * Requires 3 paths, otherwise, it'll fail with aggression
 * @param paths
 */

const readAll = (paths, callback) => {

  let contents = [];
  let promises = util.promisify(readOne);

  promises(paths[0])
    .then(results => {
      contents.push(results.toString().trim());
    })
    .then(() => {
      promises(paths[1])
        .then(results => {
          contents.push(results.toString().trim());
        })
        .then(() => {
          promises(paths[2])
            .then(results => {
              contents.push(results.toString().trim());

              callback(null, contents);
            })
            .catch(error => callback(error));
        })
        .catch(error => callback(error));
    })
    .catch(error => callback(error));
};

