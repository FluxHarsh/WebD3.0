import { WebSocketServer } from 'ws';
const wss = new WebSocketServer({ port: 8080 });
// event handler
wss.on("connection", function (socket) {
    console.log("user connected");
    socket.on("message", (e) => {
        console.log("message recieved from client");
        if (e.toString() === "ping") {
            socket.send("pong");
        }
        console.log("socket not working");
    });
});
//# sourceMappingURL=index.js.map