const express = require("express");
require("dotenv").config();
const cors = require("cors");

const router = require("./routes/router");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", router);

app.get("/", (_, res) => {
  res.json({ msg: "Hello World" });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
