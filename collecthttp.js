var http=require('http');
var tiron=[];


http.get(process.argv[2], function(res){
	res.setEncoding('utf8');
	res.on("data",function(data){

 	tiron+=data;

 });
 
 res.on('end',function(){

 	console.log(tiron.length);
 		console.log(tiron);

 	return;
 });
 }).on('error', function(e){
    console.log("Error: " + e.message);
    console.error("Error!", e);
});


 /*
──────────────────────────────────────────────────────────────────────────────

    var http = require('http')
    var bl = require('bl')

    http.get(process.argv[2], function (response) {
      response.pipe(bl(function (err, data) {
        if (err)
          return console.error(err)
        data = data.toString()
        console.log(data.length)
        console.log(data)
      }))
    })

──────────────────────────────────────────────────────────────────────────────
*/