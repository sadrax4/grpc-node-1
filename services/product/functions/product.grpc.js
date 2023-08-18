const { ProductModel } = require("../model/prodcut.model")
async function ListProduct(call, callback) {
    try {
        const products = await ProductModel.find({});
        if (!products) return res.json({ message: "No product found" });
        callback(null, { products });
    } catch (error) {
        callback(error, null)
    }
}
async function GetProduct(call, callback) {
    try {
        const { id } = call.request;
        const product = await ProductModel.findOne({ _id: id });
        callback(null, product);
    } catch (error) {
        callback(error, null);
    }
}
async function CreateProduct(call, callback) {
    try {
        const productData = call.request;
        const createResult = await ProductModel.create(productData);
        if (createResult) callback(null, { status: "not created" });
        callback(null, { status: "created" });
    } catch (error) {
        callback(error, null);
    }
}
async function DeleteProduct(call, callback) {
    try {
        const { id } = call.request;
        const deleteResult = await ProductModel.deleteOne({ _id: id });
        if (deleteResult.deletedCount == 0) callback(null, { status: "not deleted" });
        callback(null, { status: "deleted" });
    } catch (error) {
        callback(error, null);
    }
}
async function UpdateProduct(call, callback) {
    try {
        const { id, title, price } = call.request;
        const updateResult = await ProductModel.updateOne({ _id: id }, { $set: { title, price } });
        if (updateResult.modifiedCount == 0) callback(null, { status: "not updated" });
        callback(null, { status: "updated" });
    } catch (error) {
        callback(error, null);
    }
}

module.exports = {
    ListProduct,
    GetProduct,
    CreateProduct,
    UpdateProduct,
    DeleteProduct,
}