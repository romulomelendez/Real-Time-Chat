// const server = require('http').createServer()
// const io = require('socket.io')(server)

import { Server } from 'socket.io'
import http from 'http'

const HOST = 'localhost'
const PORT = process.env.PORT || 3001

const server = http.createServer()
const io = new Server(server);

io.on('connection', () => {

    console.log('Connected!')
    io.on('msg', data => {

        console.log('Connected!', data)
        io.emit('msg', 'mandando do Back')

    })

    io.on('disconnect', () => console.log('Disconnected!'))

})

io.on('msg', data => console.log(data))

server.listen(PORT, () => console.log(`Server running on ${HOST}:${PORT}`))