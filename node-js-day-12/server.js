/**
 * var http = require('http');
var uppercase = require('upper-case');
var formidable = require('formidable');
var fs = require('fs');
var url = require('url');

http.createServer(function(req,res){

  if (url.parse(req.url,true).pathname === '/somme') {

    var q = url.parse(req.url,true).query;
    console.log(q);

    if (q.a != null && q.b != null) {
        // user sent a and b params
        const a = Number.parseInt(q.a);
        const b = Number.parseInt(q.b);

        const somme = (a+b);

        res.writeHead(200,{'content-type':'application/json'});
        res.end( JSON.stringify({success:true, somme:somme}) );
        
    }else{
        res.writeHead(401,{'content-type':'application/json'});
        res.end( JSON.stringify({success:false}) );

    }


    res.end();
      
  }else{
      res.end("welcome to our app");
  }
    
    

}).listen(8080);

 */

// express

const express = require('express')
const app = express()
const port = 8080

var cors = require('cors');
const { somme, multi } = require('./modules/calcul');

app.use(cors())

app.get('/somme', (req, res) => {
    somme(req,res);
})


app.get('/multi', (req, res) => {
    multi(req,res);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

























/**
 * upload file
 *   if (req.url ==="/fileupload") {
        var form = new formidable.IncomingForm();

        form.parse(req,function(err,feilds, files){
            var oldpath = files.photo.path;
            var newpath = "C:/Users/tchou/Documents/fullstack12/node-js-day-12/images/"+files.photo.name;

            fs.rename(oldpath,newpath,function(err){
                res.end("file uploaded successfully !");
                
            })


            
        });

    } else {
        
        res.writeHead(200,{'content-type':'text/html'});

        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="photo"><br>');
        res.write('<button type="submit">send</button><br>');
        res.write('</form>');

        res.end();
    
    }


 */