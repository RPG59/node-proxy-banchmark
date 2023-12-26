var http = require('http');

http.createServer(onRequest).listen(3000);

const PROXY_URL = 'http://localhost:9999/test.jpg';

function onRequest(client_req, client_res) {
  var proxy = http.request(PROXY_URL, function (res) {
    client_res.writeHead(res.statusCode, res.headers)
    res.pipe(client_res, {
      end: true
    });
  });

  client_req.pipe(proxy, {
    end: true
  });
}