import express, {json, urlencoded} from "express";
import cors from "cors";
import connectDB from "./db.js";
import Product from "./products.js";
import dotenv from 'dotenv'

dotenv.config()

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

  app.post('/products', async (req, res) => {      try {
        const {name, price, quantity} = req.body;
        const product = new Product({name, price, quantity});
        await product.save();
        res.json({success: true});
    }
    catch (error) {
        res.status(500).send(error.message);
    }
});


app.put('/products/:id', async (req, res) => {  
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if (!product) throw new Error('Product not found');
        res.json({success: true});
    }
    catch (error) {
        res.status(500).send(error.message);
    }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});