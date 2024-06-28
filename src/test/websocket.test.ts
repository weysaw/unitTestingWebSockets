import { ServerChat } from '../server'
import { ClientChat } from '../client'

describe('websocket', (): void => {
    let server: ServerChat
    beforeAll((done: any): void => {
        server = new ServerChat(8080)
        server.startServer()
        done() 
    })

    afterAll((done): void => {
        server.close()
        done()
    })

    test('should echo messages received from server', (done: jest.DoneCallback): void => {
        const client = new ClientChat('ws://localhost:8080')
        client.startConnection()
        client.listenMessage((message: string): void => {
            console.log(message)
            expect(message).toBe('Hello I am the server, you sent: Hello I am the client')
            client.close()
            done()
        })

    })
})