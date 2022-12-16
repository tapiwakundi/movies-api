const { DataTypes } = require('@sequelize/core');
const Actor = require('./Actor');
const { v4: uuidv4 } = require('uuid');
const MovieActor = require('./MovieActor');
const db = require('.');


module.exports = (sequelize, Sequelize) => {
    const Movie = sequelize.define("movie", {
        title: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        },
        runTime: {
            type: DataTypes.SMALLINT
        },
        movie_id: {
            type: DataTypes.UUID,
            name: 'movie_id',
            defaultValue: uuidv4()
        },
    });

    Movie.associate = (models) => {
        Movie.belongsToMany(models.actor, { through: db.movieActor });
    }

    return Movie;
};