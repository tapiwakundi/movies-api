const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
};


app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
const Actor = require("./app/models/Actor");
db.sequelize.sync({})
    .then(() => {
        console.log("Synced db.");
    })
    .catch((err) => {
        console.log("Failed to sync db: " + err.message);
    });

// simple route
app.get("/movies", async (req, res) => {
    const data = await db.movies.findAll({})
    res.json({
        data
    });
});

// simple route
app.get("/movies/:id", async (req, res) => {
    const id = req.params.id

    const data = await db.movies.findOne({ where: { id } })

    console.log(`Found movie ${data.name}`);

    res.json({
        data
    });
});

app.post("/movies", async (req, res) => {
    const { title, runTime, description, actorName } = req.body

    const movie = await db.movies.create({
        title,
        runTime,
        description,
    }, {
        include: [
            {
                model: db.actors
            }
        ]
    })

    res.json({ movie })
})



// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});