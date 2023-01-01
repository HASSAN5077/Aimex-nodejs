const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const user = require("./routes/userRoute");
const errorMiddleware = require("./middleware/error");
const cors = require("cors");
app.use(express.json());
app.use(cookieParser());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
// app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/v1", user);
app.use(errorMiddleware);

module.exports = app;
