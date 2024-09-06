const Product = require('../models/product')



const getAllProducts = async (req, res) => {
    const {company, name, featured, sort, select} = req.query;
    const queryObject = {};

    if(company){
        queryObject.company = company;  
    }

    if(featured){
        queryObject.featured = featured;  
    }
    if(name){
        queryObject.name = { $regex : name, $options : 'i'};
    }

    let apiData = Product.find(queryObject);
    if(sort){
        const sortFix = sort.split(',').join(' ');
        apiData = apiData.sort(sortFix);
    }
    if(select){
        const selectFix = select.split(',').join(' ');
        apiData = apiData.select(selectFix);
    }

    //pagination

    let page = req.query.page || 1;
    let limit = req.query.limit || 3;

    let skip = (page -1)* limit;

    apiData = apiData.skip(skip).limit(limit);




    console.log(queryObject);
        
        const data = await apiData
        res.status(200).json({data, total_data : data.length});
    }

const getProductTesting = async (req, res) => {
    const data = await Product.find(queryObject);
    res.status(200).json({data});
}

module.exports = { getAllProducts, getProductTesting };