var CMD = require('./cmdExecuter.js');
var cmd =new CMD('ls',[]);
cmd.exe(function(data){console.log(data)},function(err){console.log(err)},function(end){console.log(end)});