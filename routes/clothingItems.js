const router = require("express").Router();

const {
  createItem,
  likeItem,
  dislikeItem,
  deleteItem,
} = require("../controllers/clothingItems");

router.post("/", createItem);

router.put("/:itemId/likes", likeItem);

router.delete("/:itemId", deleteItem);
router.delete("/:itemId/likes", dislikeItem);

module.exports = router;
