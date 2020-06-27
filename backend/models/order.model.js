const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  mail: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  cart: { type: Array, required: true },
});

module.exports = mongoose.model('Order', orderSchema);
