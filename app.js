const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/hi", (req, res) => {
  try {
    let { name } = req.body;
    console.log(name);
    if (name === "수영") {
      return res.send("hi");
    } else {
      return res.send("xxxxxx");
    }
  } catch (error) {
    console.log(error);
  }
});

// node app.js 매번 실행
app.listen(8081, () => {
  console.log("server on");
});
