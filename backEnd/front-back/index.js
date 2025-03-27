const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Also use this to host both on same server

// app.get("/", function (req, res) {
//   res.sendFile(__dirname + "/public/index.html");
// });

app.post("/sum", function (req, res) {
  const a = parseInt(req.body.a);
  const b = parseInt(req.body.b);

  res.json({
    ans: a + b,
  });
});

app.listen(3000);

// We have connected both front-end and back-end with cors and axios

// First run js code then server this folder by going to public npx serve
