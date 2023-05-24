const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('app running');
});

app.listen(port, () => {
    console.log(`listening at port: ${port}}`);
});