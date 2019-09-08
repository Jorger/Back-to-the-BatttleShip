"use strict";
const availableUsers = [];
const rooms = [];

/**
 * Socket.IO on connect event
 * @param {Socket} socket
 */
module.exports = {
  io: socket => {
    /**
     * Evento para un nuevo usuario
     */
    socket.on("nU", data => {
      let indexPartner = -1;
      let samePlayer = false;
      // Llega un nuevo usuario...
      // Se debe saber si hay usuarios disponibles en el array y si son diferentes a el usuario actual
      if (availableUsers.length !== 0) {
        // Hay juagdores disponibles...
        for (let i = 0; i < availableUsers.length; i++) {
          const player = availableUsers[i].player.data;
          if (player[3] !== data.player[3]) {
            indexPartner = i;
          } else {
            samePlayer = true;
          }

          if (indexPartner < 0 || samePlayer) {
            break;
          }
        }
      }

      if (indexPartner < 0 && !samePlayer) {
        const room = guid();
        // Se crea una nueva sala...
        availableUsers.push({
          player: { data: data.player, id: socket.id },
          room
        });
        socket.join(room);
      } else {
        // Encontró un compñaero...
        if (indexPartner >= 0) {
          const { room } = availableUsers[indexPartner];
          const dataGame = {
            room: availableUsers[indexPartner].room,
            p1: availableUsers[indexPartner].player,
            p2: { data: data.player, id: socket.id },
            turn: randomNumber(1, 2)
          };
          rooms.push(dataGame);
          // Eliminó el valor en el array de jugadores...
          availableUsers.splice(indexPartner, 1);
          socket.join(room);
          io.sockets.in(room).emit("sG", dataGame);
        } else {
          socket.emit("sP", { browser: data.tokenByBrowser });
        }
      }
    });

    /**
     * Recibe el ataque dado por un usuario
     */
    socket.on("sA", data => {
      const canEmmit =
        data.actualPlayer >= 1 &&
        data.actualPlayer <= 2 &&
        (data.col >= 0 && data.col < DIMENSION_BOARD) &&
        (data.row >= 0 && data.row < DIMENSION_BOARD);
      if (canEmmit) {
        io.sockets.in(data.room).emit("rA", data);
      }
    });

    /**
     * Recibe el emoji que se enviará al otro usuario
     */
    socket.on("sE", data => {
      // Validar que los emojis sean válidos??
      io.sockets.in(data.room).emit("rE", data);
    });

    /**
     * Recibe que el juego ha acabado
     */
    socket.on("gO", data => {
      let indexRoom = -1;
      for (let i = 0; i < rooms.length; i++) {
        if (rooms[i].room === data.room) {
          indexRoom = i;
          break;
        }
      }

      if (indexRoom >= 0) {
        rooms.splice(indexRoom, 1);
      }
    });

    /**
     * Evento para indicar que un jugador se ha desconectado
     */
    socket.on("disconnect", () => {
      let indexRoom = -1;
      let indexAvailable = -1;
      // Sacar al usuario de la sala, si estaba en una partida se le debe informar al compañero
      if (rooms.length !== 0) {
        for (let i = 0; i < rooms.length; i++) {
          const { p1 = { id: "" }, p2 = { id: "" } } = rooms[i];
          if (p1.id === socket.id || p2.id === socket.id) {
            indexRoom = i;
            break;
          }
        }
      }

      // Elimino la sala...
      if (indexRoom >= 0) {
        io.sockets.in(rooms[indexRoom].room).emit("gD");
        rooms.splice(indexRoom, 1);
      } else {
        // Buscar si está en el vector de players que están pendientes...
        for (let i = 0; i < availableUsers.length; i++) {
          if (availableUsers[i].player.id === socket.id) {
            indexAvailable = i;
            break;
          }
        }

        if (indexAvailable >= 0) {
          availableUsers.splice(indexAvailable, 1);
        }
      }
    });

    console.log("Connected: " + socket.id);
  }
};
