const express = require('express');
const path = require('path');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  let articles = [
    {
      id:1,
      title:"Article One",
      author:"Priyanshu Patil",
      body:"This is a article one"
    },
    {
      id:2,
      title:"Article Two",
      author:"Priyanshu Patil",
      body:"This is a article two"
    },
    {
      id:3,
      title:"Article Three",
      author:"Priyanshu Patil",
      body:"This is a article three"
    }
  ];
  res.render('index', {
    articles: articles
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