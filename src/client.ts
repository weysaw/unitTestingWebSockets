import { io as Client, Socket } from 'socket.io-client'

export class ClientChat {
  private readonly socket: Socket
  private readonly url: string

  constructor (url: string) {
    this.url = url
    this.socket = Client(this.url)
  }

  startConnection (): void {
    this.socket.on('connect', (): void => {
      this.socket.emit('message', 'Hello I am the client')
    })
  }

  listenMessage (callback: (message: string) => void): void {
    this.socket.on('response', callback)
  }

  close (): void {
    this.socket.close()
  }
}
