// A BASIC Node server
// Working with the HTTP Request Object

const http = require("http");
const url = require("url");
const StringDecoder = require("string_decoder").StringDecoder;
const util = require("util");
//const formidable = require("formidable");

const server = http.createServer(function(req, res) {

    res.setHeader("Content-type", 'application/json');
    res.setHeader('Access-Control-Allow-Origin',"*");
    res.writeHead(200);     

    
    let dataobj = {"id" : "212", "name": "Sasi", "age": "44"};
    let data = JSON.stringify(dataobj);
    res.end(data);

});

server.listen(1234, function() {
  console.log("Listening on port 1234");
});