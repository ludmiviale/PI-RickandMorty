require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
const URL = `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:5432/${DB_NAME}`;

const sequelize = new Sequelize(URL, { logging: false, native: false });

const UserModel = require("./models/User");
const FavoriteModel = require("./models/Favorite");

UserModel(sequelize);
FavoriteModel(sequelize);

const { User, Favorite } = sequelize.models;
User.belongsToMany(Favorite, { through: "user_favorite", timestamps: false });
Favorite.belongsToMany(User, { through: "user_favorite", timestamps: false });

module.exports = {
  User,
  Favorite,
  conn: sequelize,
};
