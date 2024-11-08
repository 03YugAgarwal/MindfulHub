const express = require("express");
const app = express();
var bodyParser = require("body-parser");
const cors = require("cors");
const PORT = 8081;

const http = require('http').createServer(app)

const connectDB = require("./database");

// Middleware
app.use(
  cors({
    origin: ["http://127.0.0.1:3000", "http://localhost:3000"],
    credentials: true, // Allow credentials (e.g., cookies)
  })
);
// app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
const TestRoute = require("./routes/TestRoute");
app.use("/test", TestRoute);

const UserRoute = require("./routes/UserRoute");
app.use("/user", UserRoute);

const PostRoute = require("./routes/PostRoute");
app.use("/post", PostRoute);

app.get("/", (req, res) => {
  res.send("hello world");
});

http.listen(PORT, () => {
  try {
    console.log(`Server is running on http://localhost:${PORT}`);

    connectDB();
  } catch (err) {
    console.log("Unable to start server: " + err);
  }

});

// Live Chat
const io = require('socket.io')(http, {
  cors: {
    origin: ["http://127.0.0.1:3000", "http://localhost:3000"]
  }
})

io.on('connection', (socket) => {
  console.log("Socket Connected Succesfully")

  socket.on('message', (msg) => {
    console.log(msg)
    socket.broadcast.emit('message', msg)
  })

});