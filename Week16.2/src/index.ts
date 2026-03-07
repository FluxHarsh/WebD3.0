import { WebSocketServer, WebSocket } from "ws";

const wss = new WebSocketServer({ port: 8080 });

interface User {
  socket: WebSocket;
  room: string;
}

let allSockets: User[] = [];

wss.on("connection", (socket) => {
  socket.on("message", (message) => {
    // @ts-ignore
    const parsedMessage = JSON.parse(message);


    // user have two options so here he choose to join a room
    if (parsedMessage.type == "join") {
      allSockets.push({
        socket,
        room: parsedMessage.payload.roomId,
      });
    }


    // user wants to chat as he is already in a room and we can find that pre-exsiting joined room of this user by reverse enginnering the and checking the current socket and allSockets.socket

    if (parsedMessage.type == "chat") {
      let currentUserRoom = null;
      for (let i = 0; i < allSockets.length; i++) {
        //@ts-ignore
        if (allSockets[i].socket == socket) {
          // @ts-ignore
          currentUserRoom = allSockets[i].room;
        }
      }

      for (let i = 0; i < allSockets.length; i++) {
        if (allSockets[i]?.room == currentUserRoom) {
          allSockets[i]?.socket.send(parsedMessage.payload.message);
        }
      }
    }
    
  });
});
