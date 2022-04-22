const { response } = require("express");
const express = require("express");


const app = express();
app.use(express.json());

const mongoose = require("mongoose");

const connect = () => {
return mongoose.connect("mongodb+srv://pranav:pranav123@cluster0.gvulk.mongodb.net/Hosp?retryWrites=true&w=majority");
};


const classController = require("./src/Controllers/BedsController")
const equipmentsController = require("./src/Controllers/EquipmentsController")

app.use("/beds",classController)

app.use("/equipments",equipmentsController);

app.listen(2345, async () => {
  try {
    await connect();
  } catch (err) {
    console.error(err.message);
  }
  console.log("listening on port 2345");
});
