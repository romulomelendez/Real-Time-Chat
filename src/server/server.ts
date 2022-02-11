import { httpServer } from './http'

const HOST = 'localhost'
const PORT = process.env.PORT || 3001

httpServer.listen(PORT, () => console.log(`App's running on ${HOST}:${PORT}`))