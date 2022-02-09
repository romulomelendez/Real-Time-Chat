import express from 'express'
import http from 'http'
import { Server } from 'socket.io'


const app = express()

const httpServer = http.createServer(app)
const io = new Server(httpServer)

app.use()

app.listen(3000, () => console.log('App running on port 3000'))