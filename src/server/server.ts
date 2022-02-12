//const server = require('http').createServer()
//const io = require('socket.io')(server)

import { Server } from 'socket.io'
import http from 'http'

const server = http.createServer()
const io = new Server(server);

io.on('connection', () => console.log('Connected!'))
io.on('disconnect', () => console.log('Disconnected!'))

server.listen(3001)