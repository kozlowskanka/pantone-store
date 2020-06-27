const express = require('express');
const router = express.Router();

const OrdersController = require('../controllers/orders.controller');

router.get('/orders', OrdersController.getAll);
router.post('/orders', OrdersController.postNew);

// const Order = require('../models/order.model');

// router.get('/orders', async (req, res) => {
//   try {
//     const result = await Order.find();
//     if(!result) res.status(404).json({ order: 'Not found' });
//     else res.json(result);
//   }
//   catch(err) {
//     res.status(500).json(err);
//   }
// });

// router.post('/orders', async (req, res) => {
//   try {
//     console.log('saving:', req.body);
//     // const order = new Order({...req.body});
//     const order = new Order(req.body);
//     const result = await order.save();

//     if(!result) res.status(404).json({ order: 'Not found' });
//     else res.json(result);
//   }
//   catch(err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
