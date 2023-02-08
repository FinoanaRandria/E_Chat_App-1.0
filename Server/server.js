const express = require('express')
const path = require('path')
const app = express()


const http = require('http').createServer(app)
const PORT = process.env.PORT || 3000

app.use(express.static(path.join(__dirname,'public')))

app.get('/',(req,res)=>{
      res.send('connected')
})





http.listen(PORT,()=>{
      console.log(`Server is runing on ${PORT}`)
})