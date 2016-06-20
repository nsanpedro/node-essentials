////MOVE, RENAME, REMOVE/////

//New dir
var fs = require('fs');

if(fs.existsSync("lib")){
    console.log("That path already exists breaux");
} else {
    
    fs.mkdir("lib", function(err){
        if (err){
            console.log(err);
        } else {
            console.log("Directory created breaux"); 
        }
    });
}

//RENAME

var fs = require('fs');

fs.renameSync("./FS/lib/file.md", "./FS/lib/file.json");

console.log("Config JSON file renamed");


fs.rename("./FS/lib/spawn.js", "./FS/spawn.js", function(err){
    if (err){
        console.log(err);
    } else {
        console.log("The file has been moved");
    }
});

console.log("Spawn file has been moved one level up");

//REMOVE
var fs = require('fs');


try{
    fs.unlinkSync("./FS/lib/file.json");    
} catch(err) {
    console.log(err); 
}

fs.unlink("./lib/monou.md", function(err){
    
    if(err){
        
        console.log("There has been an error: " + err);
    } else {
        console.log("The file has been removed successfully");
    }

    
});

