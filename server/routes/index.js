const router = require('express').Router();

//Import controllers to handle requests
const userController = require('../controllers/user')
const bookController = require('../controllers/book')
const cartController = require('../controllers/cart')
const wishlistController = require('../controllers/wishlist')
const addressController = require('../controllers/address')
const creditcardController = require('../controllers/creditcard')
const purchaseController = require('../controllers/purchase')

//Book Routes
router.get('/books/all', bookController.getAllBooks)

//User Routes
router.get('/user/findUser', userController.findUser)
router.post('/user/register', userController.register)
router.post('/user/login', userController.login)
router.get('/user/wishlist', wishlistController.findWishlist)
router.get('/user/logout', userController.logout)
router.post('/user/update', userController.update)

//Cart Routes
router.post('/cart/findCart', cartController.addItem)

//Wishlist Routes
router.post('/user/wishlist', wishlistController.addItem)
router.post('/wishlist/moveItem', wishlistController.moveItem)
router.delete('/wishlist/item', wishlistController.removeItem)

//Address Routes
router.get('/user/addresses', addressController.findAddresses)
router.post('/user/addAddress', addressController.addAddress)

//Credit card Routes
router.post('/user/addCard', creditcardController.addCreditcard)
router.get('/user/cards', creditcardController.findAll)

//Purchase Routes
router.get('/user/hasPurchased', purchaseController.hasPurchased)
router.post('/user/purchaseBook', purchaseController.purchaseBook)


module.exports = router