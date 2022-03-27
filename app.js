const express = require("express");
const ejs = require("ejs");
const postController = require('./controllers/postController');
const pageController = require('./controllers/pageController');
const fileUpload = require("express-fileupload");
const methodOverride = require("method-override");
const mongoose = require("mongoose");

const app = express();

//Connect Db
mongoose.connect("mongodb://localhost/cleanblog-test-db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.set("view engine", "ejs");
// MIDDLEWARES
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileUpload());
app.use(
  methodOverride("_method", {
    methods: ["POST", "GET"],
  })
);

app.get("/", postController.getAllPost);
app.get("/about", pageController.getAboutPage);
app.get("/add-post", pageController.getAddPostPage);
app.post("/add-post", postController.createPost);
app.get("/posts/:id", postController.getPost);
app.get("/posts/update/:id", pageController.getUpdatePage);
app.put("/posts/:id", postController.editPost);
app.delete('/posts/:id', postController.deletePost);
const port = 3000;
app.listen(port, () => {
  console.log(`Clean Blog starts on ${port} port`);
});
