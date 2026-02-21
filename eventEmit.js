const EventEmitter = require("events");
const event = new EventEmitter();
event.on("greet", (name,age) => {
  console.log(`hello ${name} and your gae is ${age}`);
});
event.emit("greet","karan-sharma",30);
event.emit("greet","karan-sharma",30);
event.emit("greet","karan-sharma",30);

event.once('onlyOnce',()=>{
  console.log("This event will only be triggered once");
  
});
event.emit('onlyOnce');
event.emit('onlyOnce');



//event removeListener