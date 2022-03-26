const express = require('express');
const ejs = require('ejs');
const Post = require('./models/Post');
const mongoose = require('mongoose');
const app = express();

//Connect Db
mongoose.connect('mongodb://localhost/cleanblog-test-db', {
    useNewUrlParser : true,
    useUnifiedTopology : true
});

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.get('/', async (req,res) => {
    const posts = await Post.find({});
    console.log(posts);
    res.render('index', {
        posts
    });
});
app.get('/about', (req,res) => {
    res.render('about');
});
app.get('/add-post', (req,res) => {
    res.render('add_post');
});
app.post('/add-post', async (req, res) => {
    console.log(req.body);
    await Post.create(req.body);
    res.redirect('/');
})
app.get('/post/:id', async (req,res) => {
    const post = await Post.findById(req.params.id);
    console.log(post);
    res.render('post', {
        post
    });
});
const port = 3000;
app.listen(port, () => {
    console.log(`Clean Blog starts on ${port} port`);
});
