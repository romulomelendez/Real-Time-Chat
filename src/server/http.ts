import express from 'express'
import http from 'http'
import { Server } from 'socket.io'


const app = express()

const httpServer = http.createServer(app)
const io = new Server(httpServer)

app.use()

export { httpServer, io }