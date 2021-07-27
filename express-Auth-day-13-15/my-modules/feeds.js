var MongoClient = require('mongodb').MongoClient;
const urlMongo = 'mongodb://localhost:27017';

var ObjectId = require('mongodb').ObjectId;

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