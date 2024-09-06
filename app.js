require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3002;
const router = require('./routes/routes');
const dbConnection = require('./dbConnection');
const product = require('./models/product');

app.get('/', (req, res) =>{
    res.send("Hi Expresso.")
})



app.use(('/api/v1'),router);

const start = async ()=> { 
    try{
        await dbConnection(process.env.MONGO_DB_URI);
        app.listen(PORT, ()=>{
            console.log("Server is connected")
        })
} catch(e){
    console.log("Error "+e);
}
}

start();