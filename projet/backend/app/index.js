import express, {json, urlencoded} from "express";
import cors from "cors";
import connectDB from "./db.js";
import Film from "./films.js";
import dotenv from 'dotenv'
import swaggerJsdoc from "swagger-jsdoc"
import swaggerUi from "swagger-ui-express";

/**
 * @swagger
 * components:
 *   schemas:
 *     Film:
 *       type: object
 *       required:
 *         - title
 *         - poster_path
 *         - release_date
 *         - overview
 *       properties:
 *         id:
 *           type: number
 *           description: The auto-generated id of the film
 *         title:
 *           type: string
 *           description: The title of the film
 *         poster_path:
 *           type: string
 *           description: The film poster path
 *         release_date:
 *           type: string
 *           description: the date when the film was released
 *         overview:
 *           type: string
 *           description: The film synopsis
 *         genre_ids:
 *           type: number[]
 *           description: the film genre_ids
 *         vote_average:
 *            type: number
 *            description: the film vote average
 */

dotenv.config()

const app = express();

var corsOptions = {
  origin: "*"
};

connectDB();
app.use(cors(corsOptions));
app.use(json());
app.use(urlencoded({ extended: true }));

//Swagger configuration
const options = {
    definition: {
      openapi: "3.1.0",
      info: {
        title: "Express API with Swagger",
        version: "0.1.0",
        description:
          "This is a simple CRUD API application made with Express and documented with Swagger",
        license: {
          name: "MIT",
          url: "https://spdx.org/licenses/MIT.html",
        },
        contact: {
          name: "WinnMBG",
          email: "winn77.m@hotmail.com",
        },
      },
      servers: [
        {
          url: "http://localhost:3001/",
        },
      ],
    },
    apis: ["./index.js"],
  };
  
  const specs = swaggerJsdoc(options);
  app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(specs)
  );

// simple route

/**
 * @swagger
 * tags:
 *   name: Books
 *   description: The books managing API
 * /films:
 *   get:
 *     summary: Gets all the favorite movies stored
 *     tags: [Films]
 *     responses:
 *       200:
 *         description: The favorite movies.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/Film'
 *       500:
 *         description: Some server error
 * /film:
 *   post:
 *     summary: Create a new film
 *     tags: [Film]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/Film'
 *     responses:
 *       200:
 *         description: The created film.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/Film'
 *       500:
 *         description: Some server error
 * /film/{id}:
 *   delete:
 *     summary: Delete a film by his id
 *     tags: [Film]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The book id
 *
 *     responses:
 *       200:
 *         description: The book was deleted
 *       404:
 *         description: The book was not found
 */
app.get("/films", async (req, res) => {
    try{
        const films = await Film.find()
        res.json(films)
    }  catch(error) {
        res.status(500).send(error.message)
    }
  });

  app.post('/film', async (req, res) => {      try {
        const {poster_path, title, release_date, overview, id, vote_average, genre_ids} = req.body;
        const film = new Film({poster_path, title, release_date, overview, id, vote_average, genre_ids});
        const f = await film.save();
        res.json(f);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
});


app.delete('/film/:id', async (req, res) => {  
    try {
        const film = await Film.deleteOne({_id: req.params.id});
        if (!film) throw new Error('Film not found');
        res.json({message: 'Film deleted', success: true, id: req.params.id});
    }
    catch (error) {
        res.status(500).send(error.message);
    }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});