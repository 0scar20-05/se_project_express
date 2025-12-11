const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const { errors } = require("celebrate");

const mainRouter = require("./routes/index");
const auth = require("./middlewares/auth");
const {
  validateUserBody,
  validateLoginBody,
} = require("./middlewares/validation");

const { login, createUser } = require("./controllers/users");
const { getItems } = require("./controllers/clothingItems");

const app = express();
const { PORT = 3001 } = process.env;

const errorHandler = require("./middlewares/error-handler");
const { requestLogger, errorLogger } = require("./middlewares/logger");

mongoose.connect("mongodb://127.0.0.1:27017/wtwr_db").catch(console.error);

app.use(express.json());
app.use(cors());

app.get("/crash-test", () => {
  setTimeout(() => {
    throw new Error("Server will crash now");
  }, 0);
});

app.post("/signin", validateLoginBody, login);
app.post("/signup", validateUserBody, createUser);
app.get("/items", getItems);

app.use(auth);

app.use(requestLogger);

app.use("/", mainRouter);

app.use(errorLogger);

app.use(errors());
app.use(errorHandler);

app.listen(PORT);
