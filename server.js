const express = require("express");
const mongoose = require("mongoose");
const productRouter = require("./routes/productRouter");
const app = express();
app.use(express.json());

app.use("/api/v1", productRouter);

app.get("/", (req, res) => {
  res.send("Express Hello World!");
});

mongoose
  .connect("")
  .then(() => {
    console.log("Mongo db connected");
    app.listen(3000, () => {
      console.log("App is running on port 3000");
    });
  })
  .catch((error) => {
    console.log(error);
  });
