import WebSocket, { Server } from 'ws'

const server: Server = new WebSocket.Server({ port: 8080 })

server.on('connection', (ws): void => {
  ws.on('message', (message: string): void => {
    ws.send(`Hello I am the server, I sent you: ${message}`)
  })
})

console.log('Websocket server listening on port 8080')
