// server.js

const express = require('express');
const path = require('path')
const app = express();
const port = 9001;

app.use(express.static(__dirname + '/dist'));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + 'dist/index.html'));
});

app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	);
	next();
});

app.listen(process.env.PORT || port);

console.log(`App runing on port ${port}`);
