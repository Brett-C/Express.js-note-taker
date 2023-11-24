const express = require('express');
const index_route = require('./routes/index.js');
const PORT = 3001;

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(index_route);

app.listen(PORT, () =>{
    console.log(`Server started on http://localhost:${Port}`)
})