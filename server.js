var express = require("express");
var logfmt = require("logfmt");
var port = Number(process.env.PORT || 5000);
var app = express();

app.use(logfmt.requestLogger());

app.get("/", function(req, res) {
	res.send(200, "yay");
});

app.listen(port);