const express = require("express");

const app = express();

const users = [
  {
    platform: "steam",
    library: [
      {
        game: false,
      },
    ],
  },
];

app.get("/", function (req, res) {
  const games = users[0].library;
  const totalGames = games.length;
  // let onlineGames = 0;
  // for (let i = 0; i < games.length; i++) {
  //   if (games[i].game) {
  //     onlineGames = onlineGames + 1;
  //   }
  // }
  let trueG = games.filter((val) => val.game); // We can use filter as well
  let onlineGames = trueG.length;

  const offlineGames = totalGames - onlineGames;
  res.json({
    totalGames,
    onlineGames,
    offlineGames,
  });
});

app.use(express.json());

app.post("/", function (req, res) {
  const isOnline = req.body.isOnline;
  users[0].library.push({
    game: isOnline,
  });
  res.json({
    msg: "done",
  });
});

app.put("/", function (req, res) {
  if (checkPut()) {
    for (let i = 0; i < users[0].library.length; i++) {
      users[0].library[i].game = true;
    }
    res.json({ msg: "Offline to online converted" });
  } else {
    res.status(411).json({
      msg: "You don't have any online games!",
    });
  }
});

// Condition if there is no more offline 
function checkPut() { 
  let check = false;
  for (let i = 0; i < users[0].library.length; i++) {
    if (!users[0].library[i].game) {
      check = true;
    }
  }
  return check;
}

app.delete("/", function (req, res) {
  if (checkDelete()) {
    const newLibrary = users[0].library.filter((val) => val.game == true);
    users[0].library = newLibrary;
    res.json({ msg: "deleted" });
  } else {
    res.status(411).json({
      msg: "You don't have any offline games!",
    });
  }
});

// Condition if there is no  more offline 
function checkDelete() {
  let check = false;
  for (let i = 0; i < users[0].library.length; i++) {
    if (!users[0].library[i].game) {
      check = true;
    }
  }
  return check;
}

app.listen(3000);
