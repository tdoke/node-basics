const EventEmmiter = require('events');
const eventEmmiter = new EventEmmiter();
eventEmmiter.on('hello', () => console.log("hello event emmited"))
eventEmmiter.once('hello', ()=> console.log('run it only once'))
eventEmmiter.addListener('hello', ()=> console.log('listener added using new api'))
console.log("next line")
setTimeout(() => eventEmmiter.emit('hello'), 5000)
setTimeout(() => eventEmmiter.emit('hello'), 5000)
setTimeout(() => eventEmmiter.emit('hello'), 5000)

// for more apis refer https://nodejs.org/dist/latest-v10.x/docs/api/events.html
