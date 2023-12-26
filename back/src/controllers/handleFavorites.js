const { Favorite } = require("../DB_connection");

const postFav = async (req, res) => {
  const { id, name, gender, image } = req.body;
  if (!id || !name || !image || !gender)
    return res.status(401).send("Faltan datos");

  await Favorite.findOrCreate({
    where: { id, name, gender, image },
  });

  const myFavorites = await Favorite.findAll();
  return res.status(200).json(myFavorites);
};

const deleteFav = async (req, res) => {
  const { id } = req.params;
  await Favorite.destroy({ where: { id: id } });

  const myFavorites = await Favorite.findAll();
  return res.status(200).json(myFavorites);
};

module.exports = {
  postFav,
  deleteFav,
};
