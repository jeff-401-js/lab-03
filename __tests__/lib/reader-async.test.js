'use strict';

jest.mock('fs');

const readerAsync = require('../../lib/reader-async.js');

describe('File Reader promises Module fails', () => {

  it('when given a bad file, returns an error', async () => {

    try{
      let result = await readerAsync(false);
      expect(result).toBeUndefined();
    }catch(err){

    }
  });

  it('reads 3 files', async () => {
    let files = ['File Contents', 'File Contents', 'File Contents'];
    try{
      let result = await readerAsync(files);
      expect(result).toEqual(files);
    }catch(err){

    }
  });
});
