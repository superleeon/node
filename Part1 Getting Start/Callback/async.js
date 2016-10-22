var http = require('http');

function fetchPage(){
    console.log('fetching page...');
    http.get({host: 'baidu.com', path: '/?delay=5000'}, function(res){
        console.log('data returned from baidu.com.')
    }).on('error', function(e){
        console.log('There was an error' + e);
    });
}

function fetchApi(){
    console.log('fetching api...');
    http.get({host: 'google.com',path: '/?delay=5000'},function(res){
        console.log('data returned from goole.com.');
    }).on('error',function(e){
        console.log('There was an error' + e);
    });
}

fetchPage();
fetchApi();