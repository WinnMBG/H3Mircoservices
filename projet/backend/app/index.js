import express, {json, urlencoded} from "express";
import cors from "cors";
import connectDB from "./db.js";
import Film from "./films.js";
import dotenv from 'dotenv'

dotenv.config()

const app = express();

var corsOptions = {
  origin: "*"
};

connectDB();
app.use(cors(corsOptions));
app.use(json());
app.use(urlencoded({ extended: true }));

// simple route

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