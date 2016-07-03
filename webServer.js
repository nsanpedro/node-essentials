var http = require('http');

var server = http.createServer(function(req, res){
        
        res.writeHead(200, {"Content-Type": "text/html"});
        
        res.end(`
        <!DOCTYPE>
        <html>
            <head>
                <title>Rocknroll Title</title>
            </head>
            <body>
                <h1>SERVING HTML TEXT</h1>
                <p>${req.url}</p>
                <p>${req.method}</p>
            </body>
        </html>
        
        `);
        
});

server.listen(3000);

console.log("Server listening in port 3000 breaux");
