const express = require("express");
const connectDB = require("./database/db");
require("dotenv").config();

connectDB();

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());

app.use("/api/questions", require("./routes/questions"));

app.listen(port, () => {
  console.log(`IX blogging app listening on port ${port}`);
});