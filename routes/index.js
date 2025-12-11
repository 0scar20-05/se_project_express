const router = require("express").Router();
const { NotFound } = require("../utils/errors/NotFound");

router.use("/users", require("./users"));
router.use("/items", require("./clothingItems"));

router.use((req, res) => {
  res.status(NotFound).send({ message: "Requested resource not found" });
});

module.exports = router;
