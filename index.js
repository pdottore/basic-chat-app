// Import packages
import express from 'express';
import http from 'http';
import {Server} from 'socket.io';

// Create Instances & Make Server
const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Serve static files
app.use(express.static('public'));

//Create Connection
io.on('connection', (socket) => {
    console.log("User Connected Successfully");

    socket.on("chat message", (msg) => {
        io.emit("chat message", msg);
    });

    socket.on('disconnect', () => {
        console.log("User Disconnected");
    });
});

//Run Server
server.listen(3000, () => console.log("listening on :3000"))