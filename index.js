const express = require('express');

const app = express();
const port = 5000;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('')
.then(() => console.log('MongoDB is connected...'))
.catch(err => console.log(err)) 

app.get('/', (req, res) => res.send('백엔드 서버 잘 작동함'))
app.listen(port, () => console.log(`Server started at http://localhost: ${port}`));