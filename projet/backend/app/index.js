import express, { json, urlencoded } from "express";
import cors from "cors";
import connectDB from "./db.js";
import connectDBElastic from "./db_elastic.js";
import User from "./users.js";
import dotenv from "dotenv";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import * as bcrypt from "bcrypt";

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

dotenv.config();

const app = express();

var corsOptions = {
  origin: "*",
};

const client_el = await connectDBElastic();
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
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

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

app.post("/index", async (req, res) => {
  try {
    const resp = await client_el.indices.create({ index: "films" });
    const resp2 = await client_el.indices.create({ index: "users" });
    res.status(200).send({ resp, resp2 });
  } catch (e) {
    res.status(500).send(e.message);
  }
});

app.get("/index", async (req, res) => {
  try {
    const resp = await client_el.indices.get({
      index: "films",
    });
    res.status(200).send(resp);
  } catch (e) {
    console.log(e.message);
  }
});

// app.get("/films", async (req, res) => {
//   try {
//     const films = await Film.find();
//     res.json(films);
//   } catch (error) {
//     res.status(500).send(error.message);
//   }
// });

/* Equivalent avec elastic*/
app.get("/films", async (req, res) => {
  try {
    const films = await client_el.get({
      index: "films",
    });
    res.json(films);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get('/films/_search', async (req,res) => {
  // console.log(req.query)
  try {
    const results = await client_el.search({
      query: {
        match: {
          title: req.query.title
        }
      }
    })
    res.json(results);
  } catch (e) {
    res.status(500).send(e.message);
  }
})

/* Equivalent avec elastic*/
app.post("/film", async (req, res) => {
  try {
    const {
      poster_path,
      title,
      release_date,
      overview,
      id,
      vote_average,
      genre_ids,
    } = req.body;
    const film = await client_el.index({
      index: "films",
      document: {
        poster_path,
        title,
        release_date,
        overview,
        id,
        vote_average,
        genre_ids,
      },
    });
    res.status(200).send(film);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// app.delete("/film/:id", async (req, res) => {
//   try {
//     const film = await Film.deleteOne({ _id: req.params.id });
//     if (!film) throw new Error("Film not found");
//     res.json({ message: "Film deleted", success: true, id: req.params.id });
//   } catch (error) {
//     res.status(500).send(error.message);
//   }
// });

/* Equivalent avec elastic*/

app.delete("/film/:id", async (req, res) => {
  try {
    const film = await client.delete({
      index: "films",
      id: `${req.params.id}`,
    });
    if (!film) throw new Error("Film not found");
    res.json({ message: "Film deleted", success: true, id: req.params.id });
  } catch (error) {
    res.status(500).send(error.message);
  }
});
const users = [];

app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.post("/users", async (req, res) => {
  try {
    let { identifiant, password } = req.body;
    const salt = await bcrypt.genSalt();
    const hashedPass = await bcrypt.hash(password, salt);
    const user = new User({
      identifiant,
      password: hashedPass,
      hash: salt,
    });
    const f = await user.save();
    res.json(f);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.post("/user/login", async (req, res) => {
  try {
    const userFinded = await User.findOne({identifiant: req.body.identifiant});
    if (userFinded == null) {
      return res.status(400).send("Cannot find user");
    }
    const hashedPass = await bcrypt.hash(req.body.password, userFinded.hash);
    console.log(hashedPass, userFinded);
    if (hashedPass === userFinded.password) {
      res
        .status(201)
        .send({
          message: "Login Succeded",
          data: { name: userFinded.identifiant },
        });
    } else {
      res.status(401).send("Login Failed");
    }
  } catch (e) {
    res.status(500).send(e.message);
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
