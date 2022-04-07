var EventEmitter=require('events');

var util=require('util');


function Greet(){
    this.greeting="Hello"
}

util.inherits(Greet,EventEmitter);
Greet.prototype.login=function(data){
    console.log(this.greeting+" "+data);
    this.emit('login',data);
}
var greet=new Greet();

greet.on('login',function(data){
    console.log("You are logged in now on email "+data);
});

greet.login("asmaa@gmail.com");