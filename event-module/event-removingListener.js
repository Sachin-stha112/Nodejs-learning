import { EventEmitter } from 'node:events'

const emitter = new EventEmitter()

function handleLogin() {
    console.log('User logged in')
}

emitter.on('login', handleLogin)

emitter.emit('login')
// User logged in

emitter.off('login', handleLogin) // removing listener coz once we login we don't need to log in again

emitter.emit('login')
// Nothing
