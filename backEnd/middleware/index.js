const express = require("express");
const app = express();

function checkMiddle(req, res, next) {
  const nameb = (req.params = "afzal");
//   res.json({
//     msg: "allowed by middleware",
//     nameB: nameb,
//   });
  next();
}

app.get("/ride1/", checkMiddle, function (req, res) {
  const name = req.query.a;

  res.json({
    mdg: "You got access",
    name: name,
  });
});

app.listen(3000);
