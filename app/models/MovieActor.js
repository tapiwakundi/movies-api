const { DataTypes } = require('@sequelize/core');
const Actor = require('./Actor');
const Movie = require('./Movie');


module.exports = (sequelize, _) => {
    const MovieActor = sequelize.define("movie_actor", {
        movieId: {
            type: DataTypes.UUID,
            name: 'movie_id',

        },
        actorId: {
            type: DataTypes.UUID,
            name: 'actor_id',

        }
    });

    MovieActor.associate = (models) => {
        MovieActor.belongsTo(models.actor, { foreignKey: 'actor_id' });
        MovieActor.belongsTo(models.movie, { foreignKey: 'movie_id' });
    }

    return MovieActor;
};