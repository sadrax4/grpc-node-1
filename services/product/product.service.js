require("./config/initMongo");
const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const path = require("path");
const productProto = protoLoader.loadSync(path.join(__dirname, "..", "..", "protos/product.proto"));
const { productPackage } = grpc.loadPackageDefinition(productProto);
const productURL = "localhost:4001";
const { ListProduct, GetProduct, CreateProduct, UpdateProduct, DeleteProduct } = require("./functions/product.grpc");
function initGRPC() {
    const server = new grpc.Server();
    server.addService(productPackage.ProductService.service, {
        ListProduct,
        GetProduct,
        CreateProduct,
        UpdateProduct,
        DeleteProduct
    })
    server.bindAsync(productURL, grpc.ServerCredentials.createInsecure(), (err, port) => {
        if (err) return console.log(err.message);
        server.start();
        console.log(`product service run over ${port}`);
    })
}
module.exports = initGRPC;
