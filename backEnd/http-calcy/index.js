const express = require("express");

const app = express();

app.get("/sum", function (req, res) {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);

  res.json({
    ans: a + b,
  });
});
app.get("/multiply", function (req, res) {
  const a = req.query.a;
  const b = req.query.b;

  res.json({
    ans: a * b,
  });
});
app.get("/division", function (req, res) {
  const a = req.query.a;
  const b = req.query.b;

  res.json({
    ans: a / b,
  });
});
app.get("/substract", function (req, res) {
  const a = req.query.a;
  const b = req.query.b;

  res.json({
    ans: a - b,
  });
});

app.listen(3000);

// In url we need to give values of a & b
// localhost:3000/sum?a=10&b=5
// opration name must
