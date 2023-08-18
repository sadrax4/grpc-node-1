const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const path = require("path");
const blogProto = protoLoader.loadSync(path.join(__dirname, "..", "..", "protos/blog.proto"));
const { blogPackage } = grpc.loadPackageDefinition(blogProto);
const blogURL = "localhost:4002";
const BlogClient = new blogPackage.BlogService(blogURL, grpc.credentials.createInsecure());

function ListBlog(req, res, next) {
    BlogClient.ListBlog(null, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    })
}
function GetBlog(req, res, next) {
    const { id } = req.query;
    BlogClient.GetBlog({ id }, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    })
}
function CreateBlog(req, res, next) {
    const { title, text } = req.query;
    BlogClient.CreateBlog({ title, text }, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    })
}
function DeleteBlog(req, res, next) {
    const { id } = req.query;
    BlogClient.DeleteBlog({ id }, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    })
}
function UpdateBlog(req, res, next) {
    const { id, title, text } = req.query;
    BlogClient.UpdateBlog({ id, title, text }, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    })

}
module.exports = {
    ListBlog,
    GetBlog,
    CreateBlog,
    UpdateBlog,
    DeleteBlog
}