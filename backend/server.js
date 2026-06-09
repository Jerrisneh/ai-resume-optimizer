const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is working");
});

app.post("/optimize", (req, res) => {
  console.log(req.body);

  res.json({
    message: "Resume received",
    data: req.body.resume,
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
