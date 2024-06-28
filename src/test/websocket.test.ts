import ServerChat from '../server'
import ClientChat from '../client'

describe('websocket', (): void => {
    let server: ServerChat
    beforeAll((done: any): void => {
       server = new ServerChat(8080)
       server.startServer()
    })

    afterAll((done) => {
        server.close(done)
    })

    test('should echo messages to the client connected', (done): void => {
        const client = new ClientChat('ws://localhost:8080')

    })
})