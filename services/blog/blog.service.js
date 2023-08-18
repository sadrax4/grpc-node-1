require("./config/initMongo");
const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const path = require("path");
const blogProto = protoLoader.loadSync(path.join(__dirname, "..", "..", "protos/blog.proto"));
const { blogPackage } = grpc.loadPackageDefinition(blogProto);
const blogURL = "localhost:4002";
const { ListBlog, GetBlog, CreateBlog, UpdateBlog, DeleteBlog } = require("./functions/blog.grpc");
function initGRPC() {
    const server = new grpc.Server();
    server.addService(blogPackage.BlogService.service, {
        ListBlog,
        GetBlog,
        CreateBlog,
        UpdateBlog,
        DeleteBlog
    })
    server.bindAsync(blogURL, grpc.ServerCredentials.createInsecure(), (err, port) => {
        if (err) return console.log(err.message);
        server.start();
        console.log(`blog service run over ${port}`);
    })
}
module.exports = initGRPC;
