const express = require('express');
const router = express.Router();

const OrdersController = require('../controllers/orders.controller');

router.get('/orders', OrdersController.getAll);
router.post('/orders', OrdersController.postNew);

module.exports = router;
