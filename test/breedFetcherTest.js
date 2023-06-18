// breedFetcherTest.js

const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, data) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // extract the first breed object and its description
      const desc = data && data.length > 0 ? data[0].description : undefined;

      // compare description if it's a string
      assert.isString(desc);
      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });

  it('returns an error and null description for an invalid/nonexistent breed, via callback', (done) => {
    fetchBreedDescription('InvalidBreed', (err, desc) => {
      // we expect an error for this scenario
      assert.isNotNull(err);

      // description should be null or undefined
      assert.isNotOk(desc);

      done();
    });
  });
});