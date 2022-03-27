const Post = require("../models/Post");

exports.getUpdatePage = async (req, res) => {
  const post = await Post.findOne({ _id: req.params.id });
  res.render("update", {
    post,
  });
};
exports.getAboutPage = (req, res) => {
  res.render("about");
};
exports.getAddPostPage = (req, res) => {
  res.render("add_post");
};
