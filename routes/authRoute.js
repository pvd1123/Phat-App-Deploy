const express = require('express');
const { registerController, loginController, forgotPasswordController, updateProfileController, getOrdersController, getAllOrdersController, orderStatusController } = require('../controllers/authController');
const { requireSignIn, isAdmin } = require('../middlewares/authMiddleware');


//router object
const router = express.Router()

//routing

//đăng kí
router.post('/register', registerController)

//đăng nhập
router.post('/login', loginController)

//Quên Mật Khẩu
router.post('/forgot-password', forgotPasswordController)

//user route auth
router.get('/user-auth', requireSignIn, (req, res)=>{
    res.status(200).send({ok: true});
})
//Admin route
router.get('/admin-auth', requireSignIn, isAdmin, (req, res)=>{
    res.status(200).send({ok: true});
})

//cập nhật profile người dùng
router.put("/profile", requireSignIn, updateProfileController);

router.get("/orders", requireSignIn, getOrdersController);

router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);

router.put("/order-status/:orderId",requireSignIn, isAdmin, orderStatusController);


module.exports = router;