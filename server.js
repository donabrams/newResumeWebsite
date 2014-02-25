var express = require("express");
var logfmt = require("logfmt");
var port = Number(process.env.PORT || 5000);
var app = express();

app.use(logfmt.requestLogger());

app.use(express.static(__dirname + "/static"));

app.listen(port);