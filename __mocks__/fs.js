'use strict';

module.exports = exports = {};

exports.readFile = (file, cb) => {
  if(file.match(/bad/i)){
    cb('bad.txt');
  }else{
    cb(undefined, Buffer.from('File Contents'));
  }
};