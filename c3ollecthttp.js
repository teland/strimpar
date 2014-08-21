var http=require('http');
var tiron=new Array("unoun","dodos","tretres");
var tirona=new Array("","","");
var acabose=0;
 

for (var i = 2; i < process.argv.length; i++) {

  (function () {

    var pos=i-2;
   
    
    http.get(process.argv[i], function(res){
	   
     res.setEncoding('utf8');
     res.on("data",function(data){

      	tiron[pos]+=data; 

        
      });
     
     res.on('end',function(){
      
      acabose++;
      tirona[pos]=tiron[pos]; 
     // if (acabose==3){
        for (var f=0;f==acabose-1;f++) {
         console.log(tirona[f].join());
        }
      //}
    });
    }).on('error', function(e){
          acabose++;
          console.log("Error: " + e.message);
          console.error("Error!", e);
        } ) ;
     
  } )();

}


if (acabose>=3) console.log(acabose);


 /*http://www.aulaclic.es/html/t_1_3.htm




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