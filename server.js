const express = require('express');
const index_route = require('./routes/index');
const PORT = 3009;

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(index_route);

app.listen(PORT, () =>{
    console.log(`Server started on http://localhost:${PORT}`)
})