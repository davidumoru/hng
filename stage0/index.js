const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({
    email: "umorudavido@gmail.com",
    current_datetime: new Date().toISOString(),
    github_url: "https://github.com/davidumoru/hng/tree/main/stage0",
  });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
