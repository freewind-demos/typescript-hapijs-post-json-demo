import * as Hapi from 'hapi'
import {Request} from 'hapi'

const server = new Hapi.Server({
    host: 'localhost',
    port: 8000
})

server.route({
        method: 'POST',
        path: '/hello',
        handler: function (request: Request) {
            const data = request.payload as { name: String }
            return `Hello, ${data.name}`
        }
    }
);

(async () => {
    await server.start()
    console.log('Server running at:', server.info.uri)
})()