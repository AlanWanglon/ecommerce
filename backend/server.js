import express from 'express'
import dotenv from 'dotenv'
import {connectDB} from './config/db.js'
import productRoutes from './routes/products.route.js'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // permite receber dados em JSON no req.body

app.use("/api/products", productRoutes)  // sera o prefixo em cada endpoint




app.listen(PORT, () => {
    connectDB();  // Conectando ao MongoDB
    console.log("Server started at http://localhost:" + PORT);
})


