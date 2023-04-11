var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var authRouter = require("./routes/auth");

var app = express();
const cors = require("cors"); // add at the top

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
// app.use(express.static(path.join(__dirname, "public")));

//all api routes need to end with/ /api/
app.use("/api/", indexRouter);
app.use("/api/", usersRouter);
app.use("/api/", authRouter);

module.exports = app;
