var express = require('express'),
	app = express();

app.use(express.directory(__dirname + '../'));
app.use(express.static(__dirname + '../'));
app.use(express.errorHandler());
app.listen(8888);
