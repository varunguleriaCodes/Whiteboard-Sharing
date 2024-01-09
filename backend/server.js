const express=require('express')
const app=express()

const server=require('http').createServer(app);
const { Server }=require('socket.io')
const port=process.env.PORT||5000

const io=new Server(server)

server.listen(port,()=>{
    console.log('server up on localhost port,5000')
})
app.get('/',(req,res)=>{
    res.send('hi')
})

io.on("connection",(socket)=>{
    console.log('User Connected')
})
// app.listen('5000',()=>{console.log('Hello World!')})