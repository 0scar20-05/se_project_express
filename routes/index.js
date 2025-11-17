const router = require("express").Router();
const clothingItem = require("./clothingItems");
const { NOT_FOUND } = require("../utils/errors");
const usersRouter = require("./users");

router.use("/users", usersRouter);
router.use("/items", clothingItem);

router.use((req, res) => {
  res.status(NOT_FOUND).send({ message: "Requested resource not found" });
});

module.exports = router;
