var http = require('http');
var dateM = require('./my_modules/dateModule');
var url = require('url');
var fs = require('fs')


http.createServer(function(req,res){

    /*var q = url.parse(req.url,true).query;

    console.log(q);

    res.end("<h1>Searching in archive for year"+q.year+" and id : "+q.id+" </h1>");

*/



    //res.writeHead(404,{'content-type':'text/html'}); 
    
    /*const url = req.url;


    console.log(url);


    if (url === '/summer') {
        res.end('Welcome summer');
    }else if(url === '/winter'){
        res.end('Welcome winter');
    }else{
        res.end(' <div> <a href="/summer">summer</a> <a href="/winter">winter</a>  </div> ');
    }*/



    fs.readFile('./assets/code.txt',function(err,data){

        if (err) {
            throw err;
        }
         

        console.log(data);
 

        let text = data.toString();
        let codes = text.split(";");

        let blocHTMl = '<ul>';

        codes.forEach((c)=>{
            blocHTMl+= '<li>test :'+c+'</li>' ;
        })

        res.writeHead(200,{'content-type':'text/html'})

        res.end(blocHTMl);

    })


    

    //res.end('<h1>hello world in '+dateM.getYear()+'/'+dateM.getMonth()+'</h1>' );
}).listen(8080);
