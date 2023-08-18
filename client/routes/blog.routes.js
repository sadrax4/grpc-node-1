const { ListBlog, CreateBlog, UpdateBlog, DeleteBlog, GetBlog } = require("../contorller/Blog.contoller");

const router = require("express").Router();

router.get("/create", CreateBlog);
router.get("/get", GetBlog);
router.get("/list", ListBlog);
router.get("/update", UpdateBlog);
router.get("/delete", DeleteBlog);

module.exports = {
    BlogRouter: router
}