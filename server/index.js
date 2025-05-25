import dotenv from "dotenv"
import express from "express"
import mongoose from "mongoose"
import productRouter from "./routes/productRoute.js"

dotenv.config()

const port = process.env.PORT || 8080
const db = process.env.DB_URL

mongoose.connect(db)
.then((res) => console.log("db is connected"))
.catch((err) => console.log(err.message))

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("/api/products", productRouter)

app.listen(port, () => console.log("app is connected"))
