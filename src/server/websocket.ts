import { io } from './http'

io.on('connection', socket => {

    console.log('Connected')
    console.log(socket.id)
    socket.on('disconnect', () => console.log('Disconnected'))

})