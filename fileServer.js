var http = require("http");
var fs = require("fs");
var path = require("path");


http.createServer(function(req, res){
    console.log(`${req.method} request for ${req.url}`);
    
    if(req.url === "/") {
        fs.readFile("./public/index.html", "UTF-8", function(err, html){
            res.writeHead(200, {"content-type": "text/html"});
            res.end(html);
            console.log("FileServer currently running");
        });
        
    } else if(req.url.match(/.css$/)) {
       var cssPath = path.join(__dirname, 'public', req.url);
       var fileStream = fs.createReadStream(cssPath, "UTF-8");
       
       res.write()
       
        
    } else if(req.url.match(/.jpg$/)) {
      
      var imgPath = path.join(__dirname, 'public', req.url);
      var imgStream  = fs.createReadStream(imgPath);
      
      res.writeHead(200, {"Content/type": "image/jpg"});
      
      imgStream.pipe(res);
      
      
        
    } else {
        res.writeHead(404, {"Content/type": "text/plain"}); 
        res.end("404 file not found");
    }
    
    
}).listen(3000);

console.log("File server is running on port 3000");