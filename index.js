const express = require("express");
const mortyApi = require("./routes/morty");
const cors = require("cors");
const { config } = require("./config");

const app = express();

app.use(express.json());
app.use(cors());

//routes
mortyApi(app);

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/json", (req, res) => {
  res.json({ hello: "world" });
});

app.listen(config.port, function() {
  console.log(`Listening http://localhost${config.port}`);
});
