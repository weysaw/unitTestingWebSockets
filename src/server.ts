import { Server, Socket } from 'socket.io'

export class ServerChat {
  private readonly io: Server
  private readonly port: number

  constructor (port: number) {
    this.port = port
    this.io = new Server(port, {
      cors: {
        origin: '*'
      }
    })
  }

  startServer (): void {
    this.io.on('connection', (socketClient: Socket): void => {
      socketClient.on('message', (message: string): void => {
        this.sendResponseClient(socketClient, `Hello I am the server, you sent: ${message}`)
      })
    })
    console.log(`Server running on port ${this.port}`)
  }

  private sendResponseClient (socketClient: Socket, message: string): void {
    socketClient.emit('response', message)
  }

  close (): void {
    this.io.close()
  }
}
