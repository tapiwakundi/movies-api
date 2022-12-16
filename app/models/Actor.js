const { DataTypes } = require('@sequelize/core');
const db = require('.');
const Movie = require('./Movie');
const MovieActor = require('./MovieActor');


module.exports = (sequelize, _) => {
    const Actor = sequelize.define("actor", {
        // Fill this out
        name: {
            type: DataTypes.STRING
        },
        actorId: {
            type: DataTypes.UUID,
            name: 'actor_id'
        }
    });

    Actor.associate = (models) => {
        Actor.belongsToMany(models.movie, { through: db.movieActor });
    }


    return Actor;
};