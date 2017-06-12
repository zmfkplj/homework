var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200,{
        'Content-Type':'text/plain'
    });
    res.end('Hello zj\n');
}).listen(1337,'127.0.0.1',function () {
    console.log('listen port');
});

console.log('Server running at http://127.0.0.1:1337');