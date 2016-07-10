var http = require("http");
var data = require("./data/inventory");

htt.createServer(function(req, res){
    
    
    if(req.url === "/"){
    res.writeHead(200, {"content-type": "text/json"});
    
    res.end(JSON.stringify(data));
    } else if (req.url === "/inStock"){
        listInStock(res);
    } else if(req.url === "/onOrder") {
        listOnBackOrder(res);
    } else {
        res.writeHead(404, {"Content/Type": "text/plain"});
        res.end("DATA NOT FOUND"); 
    }
    
}).listen(3000);

console.log("Server listening on port 3000");

function listInStock(res){
    var inStock = data.filter(function(item){
        return item.avail === "In Stock";
    });
    
    res.end(JSON.stringify(inStock));
}

function listOnBackOrder(res){
    var onOrder = data.filter(function(item){
        return item.avail === "On Back order";
    });
    
    res.end(JSON.stringify(onOrder));
    
}