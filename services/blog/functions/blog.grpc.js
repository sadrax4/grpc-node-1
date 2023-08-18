const { BlogModel } = require("../model/prodcut.model")
async function ListBlog(call, callback) {
    try {
        const blogs = await BlogModel.find({});
        if (!blogs) return res.json({ message: "No blog found" });
        callback(null, { blogs });
    } catch (error) {
        callback(error, null)
    }
}
async function GetBlog(call, callback) {
    try {
        const { id } = call.request;
        const blog = await BlogModel.findOne({ _id: id });
        callback(null, blog);
    } catch (error) {
        callback(error, null);
    }
}
async function CreateBlog(call, callback) {
    try {
        const blogData = call.request;
        const createResult = await BlogModel.create(blogData);
        if (createResult) callback(null, { status: "not created" });
        callback(null, { status: "created" });
    } catch (error) {
        callback(error, null);
    }
}
async function DeleteBlog(call, callback) {
    try {
        const { id } = call.request;
        const deleteResult = await BlogModel.deleteOne({ _id: id });
        if (deleteResult.deletedCount == 0) callback(null, { status: "not deleted" });
        callback(null, { status: "deleted" });
    } catch (error) {
        callback(error, null);
    }
}
async function UpdateBlog(call, callback) {
    try {
        const { id, title, price } = call.request;
        const updateResult = await BlogModel.updateOne({ _id: id }, { $set: { title, price } });
        if (updateResult.modifiedCount == 0) callback(null, { status: "not updated" });
        callback(null, { status: "updated" });
    } catch (error) {
        callback(error, null);
    }
}

module.exports = {
    ListBlog,
    GetBlog,
    CreateBlog,
    UpdateBlog,
    DeleteBlog,
}