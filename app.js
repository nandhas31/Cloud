 var ds = require('disk-space');
 ds("/", function(error, data) {
     console.log(data) // return {usedSize : "" , totalSize : ""}  in Byte
 })