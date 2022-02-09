import { io } from './http'

io.on('connection', socket => {

    console.log(socket.id)
    socket.on('disconnect', () => console.log('user disconnected'))

})