const request = require('request');

const fetchBreedData = (breedName, callback) => {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request.get(url, (error, response, body) => {
    if (error) {
      // console.log('Request Error:', error);
      callback(error, null);
    } else {
      // console.log('Response Body:', body);
      const data = JSON.parse(body);
      callback(null, data);
    }
  });
};


if (process.argv.length < 3) {
  console.log('Please provide a breed name as a command-line argument');
} else {
  const breedName = process.argv[2];
  fetchBreedData(breedName, (error, data) => {
    if (error) {
      console.log('Request Error:', error);
    } else {
      if (data.length === 0) {
        console.log('Breed not found.');
      } else {
        console.log('Data:', data);
      }
    }
  });
}