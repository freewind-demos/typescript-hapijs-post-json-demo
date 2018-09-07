import * as Hapi from 'hapi'
import {Request} from 'hapi'

// Create a server with a host and port
const server = new Hapi.Server({
    host: 'localhost',
    port: 8000
})

server.route(new class implements Hapi.ServerRoute {
        method = 'POST'
        path = '/hello'
        handler = function (request: Request) {
            const data = request.payload as { name: String }
            return `Hello, ${data.name}`
        }
    }
);

(async () => {
        try {
            await server.start()
            console.log('Server running at:', server.info.uri)
        } catch (err) {
            console.log(err)
            process.exit(1)
        }
    }
)()