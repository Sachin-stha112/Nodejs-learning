import os from 'node:os'

console.log('Platform:', os.platform())
console.log('Architecture:', os.arch())
console.log('OS Type:', os.type())
console.log('OS Release:', os.release())
console.log('OS Version:', os.version())

console.log('Hostname:', os.hostname())
console.log('Home Directory:', os.homedir())
console.log('Temp Directory:', os.tmpdir())
console.log('User Info:', os.userInfo())

console.log('CPUs:', os.cpus().length)

console.log('Total RAM:', os.totalmem())
console.log('Free RAM:', os.freemem())

console.log('Uptime:', os.uptime())
console.log('Load Average:', os.loadavg())

console.log('Network Interfaces:', os.networkInterfaces())

console.log('EOL:', JSON.stringify(os.EOL))
console.log('Constants:', os.constants)
