const { ListProduct, CreateProduct, UpdateProduct, DeleteProduct, GetProduct } = require("../contorller/product.contoller");

const router = require("express").Router();

router.get("/create", CreateProduct);
router.get("/get", GetProduct);
router.get("/list", ListProduct);
router.get("/update", UpdateProduct);
router.get("/delete", DeleteProduct);

module.exports = {
    productRouter: router
}