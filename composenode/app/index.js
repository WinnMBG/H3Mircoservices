import express, { json, urlencoded } from "express";
import cors from "cors";
const connectDB = require('./db')
import Product from "./products";

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

connectDB();
app.use(cors(corsOptions));
app.use(json());
app.use(urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my application." });
});

app.get("/products", async (req, res) => {
    try{
        const products = await Product.find()
        res.json(products)
    }  catch(error) {
        res.status(500).send(error.message)
    }
  });

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});