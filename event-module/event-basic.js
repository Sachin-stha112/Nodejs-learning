import {EventEmitter} from 'node:events'

const emitter = new EventEmitter()
function firstListener()
{
    console.log("First Listener")
}
function secondListener()
{
    console.log("Second Listener")
}
emitter.on('greet', firstListener)
emitter.on('greet', secondListener)

emitter.emit('greet')