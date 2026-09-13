import { EventEmitter } from 'node:events'

const emitter = new EventEmitter()

function handleLogin() {
    console.log('Log in handled')
}
function logLogin() {
    console.log('Login Logged')
}
function sendNotification() {
    console.log('notification-sent')
}
//
emitter.on('login', handleLogin)
emitter.on('login', logLogin)
emitter.on('login', sendNotification)
// Inspection section
console.log('Number of Listeners: ', emitter.listenerCount('login'))
console.log('List of Listeners: ', emitter.listeners('login'))

console.log('List of events: ', emitter.eventNames())
// managing Listener
emitter.setMaxListeners(1)
console.log(emitter.getMaxListeners())