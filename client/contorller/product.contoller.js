const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const path = require("path");
const productProto = protoLoader.loadSync(path.join(__dirname, "..", "..", "protos/product.proto"));
const { productPackage } = grpc.loadPackageDefinition(productProto);
const productURL = "localhost:4001";
const ProductClient = new productPackage.ProductService(productURL, grpc.credentials.createInsecure());

function ListProduct(req, res, next) {
    ProductClient.ListProduct(null, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    })
}
function GetProduct(req, res, next) {
    const { id } = req.query;
    ProductClient.GetProduct({ id }, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    })
}
function CreateProduct(req, res, next) {
    const { title, price } = req.query;
    ProductClient.CreateProduct({ title, price }, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    })
}
function DeleteProduct(req, res, next) {
    const { id } = req.query;
    ProductClient.DeleteProduct({ id }, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    })
}
function UpdateProduct(req, res, next) {
    const { id, title, price } = req.query;
    ProductClient.UpdateProduct({ id, title, price }, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    })

}
module.exports = {
    ListProduct,
    GetProduct,
    CreateProduct,
    UpdateProduct,
    DeleteProduct
}