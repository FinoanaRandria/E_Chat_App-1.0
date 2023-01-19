let express = require('express')

let app = express()

const port = 9021

app.get('/', (req,res)=>{
      res.send('hey')
})

app.listen(port,`Server is runing on ${port}`)