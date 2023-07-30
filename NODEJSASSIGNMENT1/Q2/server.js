const express = require('express');
const app = express();
const path = require('path');

// Set up static files and views
app.use(express.static(path.join(__dirname, 'form')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Route for '/gethello'
app.get('/gethello', (req, res) => {
  res.send('Hello NodeJS!!');
});

// Route for serving the HTML page
app.get('/', (req, res) => {
  res.render('index');
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
