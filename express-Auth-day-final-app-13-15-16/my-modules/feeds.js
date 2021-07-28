var MongoClient = require('mongodb').MongoClient;
const urlMongo = 'mongodb://localhost:27017';

var ObjectId = require('mongodb').ObjectId;
var url = require('url');
var jwt = require('jsonwebtoken');

exports.createNewFeed = function (req, res) {

    // recup token headers => req database => user data

    const token = req.headers.authorization;

    MongoClient.connect(urlMongo, function (err, db) {
        var eshop = db.db('eshop');
        eshop.collection('users').findOne({ token: token }, function (err, resultUser) {
            if (err) {
                throw err;
            }

            const userData = resultUser;

            delete userData.password;
            delete userData.token;

            // recup data sent from the user

            var body = [];
            req.on('data', (c) => {
                body.push(c);
            }).on('end', () => {

                let textData = Buffer.concat(body).toString();
                let feed = JSON.parse(textData);


                const feedToSave = {
                    content: feed.content.trim(),
                    addDate: new Date(),
                    user: userData
                }

                eshop.collection('feeds').insertOne(feedToSave, function (err, resInsert) {
                    if (err) {
                        throw err;
                    }

                    res.send({ success: true, message: "feed saved successfully" });

                })


            });



        })
    });




}


exports.updateFeed = function (req, res) {
    // recup token headers => req database => user data

    const token = req.headers.authorization;

    MongoClient.connect(urlMongo, function (err, db) {
        var eshop = db.db('eshop');


        // recup data sent from the user

        var body = [];
        req.on('data', (c) => {
            body.push(c);
        }).on('end', () => {

            let textData = Buffer.concat(body).toString();
            let feed = JSON.parse(textData);


            const newValues = {
                content: feed.content.trim()
            }

            eshop.collection('feeds').updateOne({ _id: ObjectId(feed.id) }, { $set: { new_content: newValues.content, update_date: new Date() } }, function (err, reqUpdate) {
                if (err) {
                    throw err;
                }

                if (reqUpdate.modifiedCount == 1) {
                    res.send({ success: true, message: "feed saved successfully" });
                } else {
                    res.send({ success: false, message: "Wrong id" });
                }


            })


        });



    });

}



exports.getAllFeeds = function (req, res) {
    // recup token headers => req database => user data
 

    MongoClient.connect(urlMongo, function (err, db) {
        var eshop = db.db('eshop');




        eshop.collection('feeds').find({}).sort({addDate:1}).toArray(function(err,feeds){
            res.send(feeds);
        })


    });

}


exports.getFeedsLikes = function (req, res) {
    // recup token headers => req database => user data
 

    MongoClient.connect(urlMongo, function (err, db) {
        var eshop = db.db('eshop');

        let id = null;

        var q = url.parse(req.url,true).query;

        id = q.id; 

        eshop.collection('feedsLikes').find({id_feed:id}) .toArray(function(err,feeds){
            res.send({success:true, likes:feeds.length});
        })

         

    });

}

exports.addLikeToFeed = function (req, res) {
    // recup token headers => req database => user data
 

    MongoClient.connect(urlMongo, function (err, db) {
        var eshop = db.db('eshop');
 
        var q = url.parse(req.url,true).query;

        let id_feed = q.id;
        let id_user = null;

        const token = req.headers.authorization;
 
        try {

            var decoded = jwt.verify(token, 'taherchourabi');
            console.log(decoded) // bar
            eshop.collection('users').findOne({token:token},function(err,user){
                id_user = user._id;


                console.log(id_user.toString(),id_feed);

                eshop.collection('feedsLikes').insertOne({id_feed:id_feed,id_user:id_user},function(err,r){
                     res.send({ success: true  })
                })
               
            })

            //
             
        } catch (error) {
            res.send({ success: false, message: "session expired ! !!!!" })
        }
         
        


        

         

    });

}


exports.deleteFeed = function (req, res) {
    // recup token headers => req database => user data
 

    MongoClient.connect(urlMongo, function (err, db) {
        var eshop = db.db('eshop');

        let id = null;

        var q = url.parse(req.url,true).query;

        id = q.id; 

        eshop.collection('feeds').deleteOne({_id : ObjectId(id)},function(err,r){
            if (r.deletedCount === 1 ) {
                res.send({success:true});
            }else{
                res.send({success:false});
            }
        })

         

    });

}
