const express = require('express');
const app = express();

const blog = {
    id:1,
    title:"Blog Title",
    description:"The perfect posts"
};
app.get('/', (req,res) => {
    res.status(200).send(blog);
});

const port = 3000;
app.listen(port, () => {
    console.log(`Clean Blog starts on ${port} port`);
});
