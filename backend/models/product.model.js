const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  color: { type: String, required: true },
  number: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
});

module.exports = mongoose.model('Product', productSchema);
