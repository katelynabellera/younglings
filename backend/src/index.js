const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.use("/api/questions", require("./routes/questions"));

app.listen(port, () => {
  console.log(`IX blogging app listening on port ${port}`);
});