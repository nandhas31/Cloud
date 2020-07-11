 const ds = require('disk-space');
 const express = require('express');
 const ejs = require('ejs');
 const app = express();
 app.set('view engine', 'ejs');
 app.get('/', function(req, res) {
     ds("/", function(error, data) {
         res.render('main', { used: data ? data.usedSize : 'error', total: data ? data.totalSize : 'error' }); // return {usedSize : "" , totalSize : ""}  in Byte
     })
 })

 app.listen('8080', function() {
     console.log('App Started!');
 })