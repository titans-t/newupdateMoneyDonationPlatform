const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST'],
    },
});
const socketMap = {}

const getReceiverSocketId= (receiverId)=>{
    return socketMap[receiverId]
}

io.on('connection', (socket) => {
    console.log('Client connected');
     socketMap[socket.handshake.query.userId] = socket.id

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

module.exports = { app, server, io, getReceiverSocketId};
