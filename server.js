const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const colors = require("colors");
const dotenv = require("dotenv");
const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
// env config
dotenv.config();
//routes
app.get("/", (req, res) => {
  res.status(200).send({
    message: "node server",
  });
});
//port
const PORT = process.env.PORT || 8080;

app.listen(8080, () => {
  console.log(
    `server running on ${process.env.DEV_MODE}  mode port no ${PORT}`.bgCyan
      .white
  );
});
