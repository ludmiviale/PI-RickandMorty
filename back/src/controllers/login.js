const { User } = require("../DB_connection");

const login = async (req, res) => {
  const { email, password } = req.query;
  if (!email || !password) return res.status(400).send("Faltan datos");

  const user = await User.findOne({ where: { email: email } });
  if (!user) return res.status(404).send("Usuario no encontrado");

  return user.password === password
    ? res.status(200).json({ access: true })
    : res.status(403).send("Contraseña incorrecta");
};

const createUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOrCreate({
    where: { email: email, password: password },
  });

  return res.status(404).json(user);
};

module.exports = {
  login,
  createUser,
};
