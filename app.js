const express = require('express');
const ejs = require('ejs');
const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));
const blog = {
    id:1,
    title:"Blog Title",
    description:"The perfect posts"
};
app.get('/', (req,res) => {
    res.render('index');
});
app.get('/about', (req,res) => {
    res.render('about');
});
app.get('/add-post', (req,res) => {
    res.render('add_post');
});
app.get('/post', (req,res) => {
    res.render('post');
});
const port = 3000;
app.listen(port, () => {
    console.log(`Clean Blog starts on ${port} port`);
});
