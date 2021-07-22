var url = require('url');

exports.somme = function(req,res){
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
}

exports.multi = function(req,res){
    var q = url.parse(req.url,true).query;
    console.log(q);

    if (q.a != null && q.b != null) {
        // user sent a and b params
        const a = Number.parseInt(q.a);
        const b = Number.parseInt(q.b);

        const somme = (a*b);

        res.writeHead(200,{'content-type':'application/json'});
        res.end( JSON.stringify({success:true, somme:somme}) );
        
    }else{
        res.writeHead(401,{'content-type':'application/json'});
        res.end( JSON.stringify({success:false}) );

    }
    
}