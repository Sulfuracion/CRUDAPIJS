const mongoose = require('mongoose');

const ProducetSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "introduzca el nombre del producto"]
        },

        quantity: {
            type: Number,
            requires: true,
            defaultValue: 0
        },

        price: {
            type: Number,
            requires: true,
            defaultValue: 0
        },
        image: {
            type: String,
            required: false
        },
    },
    { timestamp: true }
);

const Product = mongoose.model("Product", ProducetSchema);

module.exports = Product;
