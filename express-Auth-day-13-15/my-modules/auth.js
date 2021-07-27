const  MongoClient  = require("mongodb").MongoClient;
const urlMongo = 'mongodb://localhost:27017';
var sha1 = require('sha1');
var jwt = require('jsonwebtoken');


exports.createAccount = function(req,res){
    var body = [];
    req.on('data', (c) => {
        body.push(c);
    }).on('end', () => { 

        let textData = Buffer.concat(body).toString();
        let JsonBody = JSON.parse(textData);

        // check if user is already in the database
        MongoClient.connect(urlMongo,function(err,db){
            var eshop = db.db('eshop');

            eshop.collection('users').find({email:JsonBody.email}).toArray(function(err,result){
                if (result.length === 0) {
                    // we can add the user

                    // md5 md1 sha1
                    const userDoc = {
                        fullname: JsonBody.fullname.trim(),
                        email:JsonBody.email.trim().toLowerCase(),
                        password:sha1(JsonBody.password)
                    }
                    eshop.collection('users').insertOne(userDoc,function(err,resAdd){
                        if(err) throw err;

                        res.send({success:true})
                    })


                }else{
                    res.send({success:false, message:"This email is already in use by another user."})
                }
            })
        })
        


        
    })
}


exports.authenticateAccount = function(req,res){
    var body = [];
    req.on('data', (c) => {
        body.push(c);
    }).on('end', () => { 

        let textData = Buffer.concat(body).toString();
        let JsonBody = JSON.parse(textData);

        // check if user is already in the database
        MongoClient.connect(urlMongo,function(err,db){
            var eshop = db.db('eshop');

            eshop.collection('users').find({email:JsonBody.email,password:sha1(JsonBody.password) }).toArray(function(err,result){
                if (result.length === 0) {
                    res.send({success:false, message:"Wrong email or password."})

                }else{
                    // generate a new token for the user
                    var token = jwt.sign(

                        {
                            user: JsonBody.email,
                            iat: Math.floor(Date.now() / 1000),
                            exp: Math.floor(Date.now() / 1000) + ((60 * 60) *24 ),
                        },

                        'taherchourabi');
                    

                    eshop.collection('users').updateOne({email:JsonBody.email},{ $set : {token:token} },function(err,updateRes){
                        if (err) {
                            throw err;
                        }

                        res.send({ success: true, token: token })
                    })
                }
            })
        })
        


        
    })
}