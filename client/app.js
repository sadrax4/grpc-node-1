const express = require("express");
const { AllRoutes } = require("./routes/index.routes");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(AllRoutes);
app.listen(4000, () => {
    console.log("Client running over port 4000");
})
