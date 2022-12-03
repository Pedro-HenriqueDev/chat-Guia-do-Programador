const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const port = process.env.PORT || 3000;

io.on("connection",(socket) => {
  socket.on("disconnect", (data) => {
    console.log("Desconectado");
  });

  socket.on("msg", (data) => {
    io.emit("showMsg", data)
  });
});


app.set("view engine", "ejs");

app.get(port, (req,res) => {
  res.render('index')
})




http.listen(3000, () => {
  console.log("RODANDO")
});