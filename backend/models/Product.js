const mogoose = require('mongoose');
const productSchema = new mogoose.Schema(
    {
        name: String,
        category: String,
        price: Number,
        description: String,
        createdAt: {
            type: Date,
            default: Date.now,
        }
    });
module.exports = mogoose.model('Product', productSchema);