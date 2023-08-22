const express = require('express')
const colors = require('colors')
const morgan = require('morgan')
const connectDB = require("./config/db");
const dotenv = require("dotenv")
const PORT = process.env.PORT || 8000
const cors = require('cors');
const path = require("path");

const authRoutes = require('./routes/authRoute')
const categoryRoutes = require('./routes/categoryRoute')
const productRoutes = require('./routes/productRoute')

//database config
connectDB();

//configure env
dotenv.config()

//rest object
const app = express()

//middlewares
app.use(cors());
app.use(express.json())
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, './client/build')))

//routes
app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/category', categoryRoutes)
app.use("/api/v1/product", productRoutes);



//rest api
app.use('*', function(req,res){
    res.sendFile(path.join(__dirname,'./client/build/index.html'))
})

app.listen(PORT, ()=>{
    console.log(`HEHE ${PORT}`)
})