const express = require('express')();
const server = require('http').createServer(express)
const io = require('socket.io')(server, { cors: { origin: '*' } })


io.on('connection', (socket) => {
    // console.log("What is socket", socket)
    socket.on('chat', (content) => {
        console.log('What is message: ', content)
        socket.broadcast.emit('chat', content)
    })
})

server.listen(5000, () => {
    console.log("listen on 5000...")
})

