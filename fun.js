const fs = require('fs')
const http = require('http')

const server = http.createServer((req, res) => {
    fs.readFile('./index.html', (err, data) => {
        if(err){
            console.log(err)
        }
        res.write(data)
        res.end()
    })
})

server.listen(4646, () => console.log("Server is Running"))