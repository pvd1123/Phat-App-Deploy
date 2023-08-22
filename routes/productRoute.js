const express = require('express');
const { requireSignIn, isAdmin } = require('../middlewares/authMiddleware');
const { createProduct, updateProduct, getAllProduct, getSingleProduct, productPhoto, deleteProduct, 
        productFilters, productCount, productList, searchProduct, 
        realtedProduct, productCategory, brainTreePayment, braintreeToken } = require('../controllers/productController');
const formidable = require("express-formidable");


const router = express.Router()

router.post("/create-product",requireSignIn, isAdmin, formidable(), createProduct);

//routes
router.put("/update-product/:pid", requireSignIn, isAdmin, formidable(), updateProduct);
  
//get products
router.get("/get-product", getAllProduct);
  
//single product
router.get("/get-product/:slug", getSingleProduct);
  
//get photo
router.get("/product-photo/:pid", productPhoto);
  
//delete product
router.delete("/product/:pid", deleteProduct);

router.post("/product-filters", productFilters);


router.get("/product-count", productCount);


router.get("/product-list/:page", productList);

//search product
router.get("/search/:keyword", searchProduct);

//similar product
router.get("/related-product/:pid/:cid", realtedProduct);

//category wise product
router.get("/product-category/:slug", productCategory);

//payments routes
//token
router.get("/braintree/token", braintreeToken);

//payments
router.post("/braintree/payment", requireSignIn, brainTreePayment);

module.exports = router;