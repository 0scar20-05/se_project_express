const router = require("express").Router();

const {
  createItem,
  getItems,
  updateItem,
  deleteItem,
} = require("../controllers/clothingItems");

// CRUD

// Create
router.post("/", createItem);

//Read
router.get("/", getItems);

//Update
router.put("/:itemId/likes", updateItem);

//Delete
router.delete("/:itemId", deleteItem);
router.delete("/:itemId/likes", deleteItem);

module.exports = router;
