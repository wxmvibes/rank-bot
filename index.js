const express = require("express");
const noblox = require("noblox.js");

const app = express();
app.use(express.json());

// CHANGE THESE:
const GROUP_ID = 35878770; // your group id
const PASS_SCORE = 80;    // passing score
const RANK_ID = 7;       // rank to promote to

// Login bot
async function start() {
  await noblox.setCookie(process.env.COOKIE);
  console.log("Bot logged in!");
}
start();

// Endpoint that Roblox will use
app.post("/rank", async (req, res) => {
  const { userid, score } = req.body;

  if (score >= PASS_SCORE) {
    await noblox.setRank(GROUP_ID, userid, RANK_ID);
    res.send("Rank success");
  } else {
    res.send("Score too low");
  }
});

// Start server
app.listen(3000, () => console.log("Running on port 3000!"));
