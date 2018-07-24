const users = [];

const messages = [];

function isUser(user) {
  const usersCount = users.length;

  for (var i = 0; i < usersCount; i++) {
    if (user == users[i]) {
      return true;
    }
  }
  return false;
}
module.exports = function Route(app, server) {
  const io = require("socket.io").listen(server)

  io.sockets.on("connection", function(socket) {
    socket.on("page_load", function(data) {
      const existingUser = isUser(data.user);
      const event = existingUser ? 'existing_user' : 'load_messages';
      const details = existingUser ? {
                    error: "This user already exits"
                  } : { current_user: data.user, messages: messages };

      if (!existingUser) {
        users.push(data.user);
      }

      socket.emit(event, details);
    });

    socket.on("new_message", function(data) {
      messages.push({ name: data.user, message: data.message });
      io.emit("post_new_message", { new_message: data.message, user: data.user });
    });
  });

  app.get("/", function(request, response){
    response.render("index")
  });
};
