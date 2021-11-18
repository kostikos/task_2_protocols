const http = require('http');

const options = {
  headers: {
    'Accept': 'text/html'
  },
  hostname: '127.0.0.1',
  port: 3002,
  path: '/',
  method: 'GET'
};

let request = http.request(options, function (res) {
  if (res.statusCode !== 200) {
    console.error(`Did not get an OK from the server. Code: ${res.statusCode}`);
    res.resume();
    return;
  }
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('close', () => {
    console.log('Retrieved all data');
    console.log(data);
  });
});

request.end();

request.on('error', (err) => {
  console.error(`Encountered an error trying to make a request: ${err.message}`);
});
