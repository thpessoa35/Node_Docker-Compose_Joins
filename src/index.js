const express = require('express');
const client = require('../src//app/db/db')
const router = require('./router')
const app = express();
const port = 3000;
app.use(express.json())

app.use(router)

app.get('/',  (req, res)=>{
    res.json({message: "ok"})
})  
client.connect()



app.listen(port,() => console.log(`server is running ${port}`))
