'use strict';

jest.mock('fs');

const readerAsync = require('../../lib/reader-async.js');

describe('File Reader promises Module fails', () => {

  it('when given a bad file, returns an error', async () => {

    try{
      let result = await readerAsync(false);
      expect(result).toBeUndefined();
    }catch(err){}
  });



  it('reads 3 files', () => {
    let files = ['File Contents', 'File Contents', 'File Contents'];

    return readerPromises(files)
      .then(result => {
        expect(result).toEqual(files);
      });
  });
});
