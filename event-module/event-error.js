import { EventEmitter } from 'node:events'

const emitter = new EventEmitter()

emitter.on('error', (error) => {
    console.error('Something went wrong: ', error.message)
})

emitter.emit('error', new Error('Error in Database(assume)'))
console.log("Program Continues")