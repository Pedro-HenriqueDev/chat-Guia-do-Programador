const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const PORT = process.env.PORT || 3000;

io.on("connection",(socket) => {
  socket.on("msg", (data) => {
    io.emit("showMsg", data)
  });
});


app.set("view engine", "ejs");

app.get('/', (req,res) => {
  res.render('index')
})


http.listen(PORT, () => {
  console.log("RODANDO")
});