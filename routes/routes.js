const express = require('express');
const router = express.Router();
const { getAllProducts, getProductTesting}  = require('../controllers/routes');

router.route('/').get( async (req, res) =>{
    res.status(200).json({msg: "Hello router for products set."})
})
router.route('/products').get(getAllProducts);
router.route('/testing').get(getProductTesting);


module.exports = router;