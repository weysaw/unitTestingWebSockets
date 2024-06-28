import WebSocket from 'ws'

export class ServerChat {
  private readonly server: WebSocket.Server
  private readonly port: number

  constructor (port: number) {
    this.port = port
    this.server = new WebSocket.Server({ port })
  }

  startServer (): void {
    this.server.on('connection', (ws): void => {
      this.onMessage(ws, 'Hi')
    })
    console.log(`Server running on port ${this.port}`)
  }

  onMessage (ws: WebSocket, message: string): void {
    ws.on('message', (message: string): void => {
      this.sendMessageClient(ws, message)
    })
    console.log('Client connected')
    console.log(message)
  }

  private sendMessageClient (ws: WebSocket, message: string): void {
    ws.send(`Hello I am the server, I sent you: ${message}`)
  }

  onClientDisconnect = (ws: WebSocket): void => {
    console.log('Client disconnected')
  }
}
