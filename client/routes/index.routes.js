const { BlogRouter } = require("./blog.routes");
const { productRouter } = require("./product.routes");

const router = require("express").Router();

router.use("/blog", BlogRouter);
router.use("/product", productRouter);
module.exports = {
    AllRoutes: router
}