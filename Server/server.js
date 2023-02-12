const express = require('express')
const app = express()
const http = require('http').createServer(app);
const path = require('path')
const io = require('socket.io')(http);
const Port = 3000



app.use(express.static(path.join(__dirname,'public')))

io.on('connection', socket=>{
      console.log('Connected')
      socket.on('disconnect',()=>{
            console.log('Disconnected');
      })
      socket.on('sendMessage',msg=>{
              console.log(msg)
            socket.broadcast.emit('sendToAll',msg)
      })
})

http.listen(Port, console.log(`Server is starting on ${Port}`))



