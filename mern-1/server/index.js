const express = require("express");
const cors = require("cors");
const Signup = require("../server/model/Signup");
const UserRoutes = require("../server/routes/userRoutes");
const { default: mongoose } = require("mongoose");

const app = express();
mongoose.connect("mongodb://0.0.0.0:27017/").then(() => console.log("mongodb connected successfully")).catch((error) => console.log(error));

app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
    res.send("Hello World");
});

app.use("/user", UserRoutes);


app.listen(4000, () => {
    console.log("Server is running");
}
);

