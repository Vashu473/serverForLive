const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(
  cors({
    origin: "http://127.0.0.1:5500",
    credentials: true,
  })
);
app.use(express.json());
app.use(bodyParser({ extended: false }));
let imageArr = [
  "https://images6.alphacoders.com/128/1288491.jpg",
  "https://w0.peakpx.com/wallpaper/225/192/HD-wallpaper-kirito-sao.jpg",
  "https://i.pinimg.com/originals/9c/59/e4/9c59e4d40d1045d6a4a56b62427e0639.png",
  "https://i.pinimg.com/originals/47/77/bc/4777bc26067bc7eb94715f1b9624f647.png",
  "https://e0.pxfuel.com/wallpapers/232/207/desktop-wallpaper-kirito-sword-art-online-cool-kirito.jpg",
];

app.post("/getImage", (req, res) => {
  res.json({ msg: imageArr[req.body.img] });
});

app.listen(80, () => {
  console.log("server started");
});
