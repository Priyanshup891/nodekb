const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

mongoose.connect('mongodb://localhost/nodekb');
let db = mongoose.connection;

db.once('open', () => console.log("Connected to mongodb !"))

db.on('error', () => console.log(err));


const app = express();

let Article = require('./models/articles');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  Article.find({}, (err, articles) => {
    if(err){
      console.log(err);
    } else {
      res.render('index', {
        articles: articles
      })
    }
  })
})

app.get('/articles/add', (req, res) => {
  res.render('add', {
    title:"Add Articles"
  })
})

app.listen('3000', () => {
  console.log("Serve on port 3000 !");
})