 const ds = require('disk-space');
 const express = require('express');
 const app = express();

 app.get('/', function(req, res) {
     ds("/", function(error, data) {
         res.end(data) // return {usedSize : "" , totalSize : ""}  in Byte
     })
 })

 app.listen('8080', function() {
     console.log('App Started!');
 })