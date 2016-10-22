var fs = require('fs');
    http = require('http');

http.get({host: 'baidu.com'}, function(){
    console.log(new Date(), 'Get response from baidu.com');
}).on('error', function(e){
    console.log(new Date(), 'There was an error form baidu.com.');
});

fs.readFile('breakfast.js', 'utf8', function(err, data){
    if(err) throw err;
    console.log(new Date(), data);
});

http.get({host: 'goole,com'}, function(res){
    concole.log(new Date(), 'Get response from goole.com');
}).on('error', function(e){
    console.log(new Date(), 'There was an error from goole.com.');
});

fs.readFile('package.json', 'utf8', function(err, data){
    if(err) throw err;
    console.log(new Date(), data);
});