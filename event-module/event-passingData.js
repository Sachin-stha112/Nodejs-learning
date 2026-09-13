import {EventEmitter} from 'node:events'

const emitter = new EventEmitter()

const user = {
    id : 1,
    name : 'Sachin',
    email : 'sachin@goat.com'
}

emitter.on('user-created', (user) => 
{
    console.log("User Details: ");
    console.log(`Id: ${user.id}`)
    console.log(`Name: ${user.name}`)
    console.log(`Email: ${user.email}`)
})

emitter.emit('user-created', user) // passing event and data 