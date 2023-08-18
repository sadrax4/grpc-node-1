const { default: mongoose, model } = require("mongoose");

const productSchema = new mongoose.Schema({
    title: { type: String },
    price: { type: String }
})
productSchema.set('toJSON', {
    virtuals: true
});


module.exports = {
    ProductModel: mongoose.model("product", productSchema)
}