const http = require('http')

const server = http.createServer((req, res) => {
    console.log(req.url)
    res.end('<h1>Hello, NodeJS!!</h1')
})

server.listen(4545, () => {
    console.log("Server is Running on 4545 port.")
})