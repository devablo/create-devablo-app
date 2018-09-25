const express = require('express')
const app = express()
const path = require('path');

// Constants
const PORT = process.env.PORT || 4000;

app.use('/public', express.static(path.resolve(__dirname, '../public')));
app.use('/dist', express.static(path.join(__dirname, '/../dist')));

app.get('/', function(req, res) {
  res.sendFile(path.resolve(__dirname, '../public/index.html'));
});

app.listen(PORT, () => console.log(`listening on port !${PORT}`))
