 const ds = require('disk-space');
 const express = require('express');
 const app = express();

 app.get('/', function(res, req) {
     ds("/", function(error, data) {
         res.end(data) // return {usedSize : "" , totalSize : ""}  in Byte
     })
 })