require('dotenv').config();
const dbConnection = require('../dbConnection');
const Products = require('../models/product');
const ProductJson = require('../models/products.json');

const start = async () =>{
    try{
        await dbConnection( "mongodb+srv://jamss0112:SXne1aeiu62fL33V@aviralproductapi.39smc.mongodb.net/?retryWrites=true&w=majority&appName=AviralProductAPI");
       await Products.deleteMany(); // THis is used to add data only once and deletes if repeated.
        await Products.create(ProductJson);
        console.log("Successfully Created.");
        
    }catch(e){
        console.log(e);
        
    }
}

start();