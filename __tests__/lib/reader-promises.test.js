'use strict';

jest.mock('fs');

const readerPromises = require('../../lib/reader-promises.js');

describe('File Reader promises Module fails', () => {

  it('when given a bad file, returns an error', () => {
    let files = ['bad.txt'];

    return readerPromises(files)
      .then()
      .catch(err => expect(err).toBeDefined());
  });



  it('reads 3 files', () => {
    let files = ['File Contents', 'File Contents', 'File Contents'];

    return readerPromises(files)
      .then(result => {
        expect(result).toEqual(files);
      });
  });
});

