const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

const port = process.env.PORT || 5000;

const chefs = require('./data/chefs.json');
const recipes = require('./data/recipes.json');

app.get('/', (req, res) => {
    res.send('app running');
});

app.get('/chefs', (req, res) => {
    res.send(chefs);
});

app.get('/chef/:id', (req, res) => {
    const id = req.params.id;
    const chef = recipes.find(recipe => recipe.id === id);
    res.send(chef);
});

app.get('/recipes', (req, res) => {
    res.send(recipes);
});

app.listen(port, () => {
    console.log(`listening at port: ${port}}`);
});