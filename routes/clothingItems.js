const router = require("express").Router();

const {
  createItem,
  likeItem,
  dislikeItem,
  deleteItem,
} = require("../controllers/clothingItems");

const {
  validateClothingItemBody,
  validateItemId,
} = require("../middlewares/validation");

router.post("/", validateClothingItemBody, createItem);

router.put("/:itemId/likes", validateItemId, likeItem);

router.delete("/:itemId", validateItemId, deleteItem);
router.delete("/:itemId/likes", validateItemId, dislikeItem);

module.exports = router;
