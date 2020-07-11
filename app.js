 const ds = require('disk-space');
 const express = require('express');
 const ejs = require('ejs');
 const fs = require('fs');
 const app = express();
 const formidable = require('formidable');
 app.set('view engine', 'ejs');
 app.get('/', function(req, res) {
     ds("/", function(error, data) {
         res.render('main', { used: data ? data.usedSize : 'error', total: data ? data.totalSize : 'error' }); // return {usedSize : "" , totalSize : ""}  in Byte
     })
 })


 app.post('/fileUpload', function(req, res){
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
    console.log(fields)
      var oldpath = files.testfile.path;
      var newpath = '/usr/local/Cloud' + files.testfile.name;
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        res.write('File uploaded and moved!');
        res.end();
      });
    })
})

 app.listen('8080', function() {
     console.log('App Started!');
 })