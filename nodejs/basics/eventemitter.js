var events=require('events');
var eventEmitter=new events.EventEmitter();

//create an event handler
var myEventHandler=()=>{
    console.log('I hear a Scream');
}

//assign the event handler to an event
eventEmitter.on('Scream', myEventHandler);

//fire the 'Scream' event
eventEmitter.emit('Scream');