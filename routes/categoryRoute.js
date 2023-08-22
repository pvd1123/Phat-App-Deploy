const express = require('express');
const { requireSignIn, isAdmin } = require('../middlewares/authMiddleware');
const { createCategory, getAllCategory, singleCategory, updateCategory, deleteCategory } = require('../controllers/categoryController');



const router = express.Router()


router.post('/create-category', requireSignIn, isAdmin, createCategory)

router.put(
    "/update-category/:id",
    requireSignIn,
    isAdmin,
    updateCategory
  );

router.get("/get-category", getAllCategory);
router.get("/single-category/:slug", singleCategory);

router.delete(
    "/delete-category/:id",
    requireSignIn,
    isAdmin,
    deleteCategory
  );



module.exports = router;