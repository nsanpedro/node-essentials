var Person = require('./person');

var robert = new Person("Robert Plant");
var lemmy =  new Person("Lemmy Kilmister");

robert.on('speak', function(said){
    
    console.log(`${this.name}: ${said}`);
    
});

lemmy.on('speak', function(said){
    console.log(`${this.name}: ${said}`);
})

robert.emit('speak', 'Music is for every single person that walks the planet.');
lemmy.emit('speak', 'If you didn t do anything that wasn t good for you it would be a very dull life. What are you gonna do? Everything that is pleasant in life is dangerous.');
