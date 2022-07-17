const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//  route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my API" });
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

const db = require("./app/database/index");
db.sequelize.sync({ force: true });
