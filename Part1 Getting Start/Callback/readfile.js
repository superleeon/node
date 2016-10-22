var fs = require('fs');

fs.readFile('breakfast.js', 'utf8', function(err,data){
    if (err) throw err;
    console.log(data);
});