const Sequelize = require("sequelize");
const sequelize = new Sequelize("postgresql://tapiwakundi:v2_3wvPk_BSgZsPtDCRFPc9G9Q5pWwGi@db.bit.io/tapiwakundi/movie-api?sslmode=require");

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.movies = require("./Movie.js")(sequelize, Sequelize);
db.actors = require("./Actor.js")(sequelize, Sequelize);
db.movieActor = require("./MovieActor.js")(sequelize, Sequelize);

module.exports = db;