/*
 * This is a simple http server to serve
 * the static contents in ./build/ directory
 */

var express = require('express'),
	server = express(),
	port = '8080',
	documentRoot = __dirname + '/build';

console.log("Use document root: " + documentRoot);
server.use("/", express.static(documentRoot));

console.log("Starting server on port " + port);
server.listen(port);
