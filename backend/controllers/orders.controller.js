const Order = require('../models/order.model');

exports.getAll = async (req, res) => {
  try {
    const result = await Order.find();
    if(!result) res.status(404).json({ order: 'Not found' });
    else res.json(result);
  }
  catch(err) {
    res.status(500).json(err);
  }
};

exports.postNew = async (req, res) => {
  try {
    console.log('saving:', req.body);
    // const order = new Order({...req.body});
    const order = new Order(req.body);
    const result = await order.save();

    if(!result) res.status(404).json({ order: 'Not found' });
    else res.json(result);
  }
  catch(err) {
    res.status(500).json(err);
  }
};
