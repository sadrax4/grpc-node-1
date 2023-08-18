const { default: mongoose, model } = require("mongoose");

const blogSchema = new mongoose.Schema({
    title: { type: String },
    text: { type: String },
})
blogSchema.set('toJSON', {
    virtuals: true
});
module.exports = {
    BlogModel: mongoose.model("blog", blogSchema)
}