/* controllers */
const { login, createUser } = require("../controllers/login");
const { getCharById } = require("../controllers/getCharById");
const { postFav, deleteFav } = require("../controllers/handleFavorites");
/* express config */
const express = require("express");
const router = express.Router();

/* routes */
router.get("/character/:id", getCharById);

router.get("/login", login);
router.post("/login", createUser);

router.post("/fav", postFav);
router.delete("/fav/:id", deleteFav);

module.exports = {
  router,
};
