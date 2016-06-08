var readline = require("readline");
var rl = readline.createInterface(process.stdin, process.stdout);
var realPerson = {
    name: '',
    sayings: []
};

rl.question("Como es su nombre bella princesa?", function(answer){
    realPerson.name = answer;
    
    rl.setPrompt(`Que tienes para decir, ${realPerson.name}?`); //aca esta el yeite, minuto 5:40
    
    rl.prompt();
    
    rl.on('line', function(saying){
        
        realPerson.sayings.push(saying.trim());
        
        if(saying.toLowerCase().trim() === 'exit'){
            rl.close();
        } else {
            rl.setPrompt(`Que mas quieres decir nenica, ${realPerson.name}? ('exit' para salir)`);
            rl.prompt();    
        }
        
    });
}); 

rl.on('close', function(){
    console.log("%s es una persona real que dice %j", realPerson.name, realPerson.sayings);
    process.exit();
    
})