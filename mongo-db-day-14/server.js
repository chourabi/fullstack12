const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {

    // SELECT **** ORDER BY ...  => FIND sort
    var MongoClient = require('mongodb').MongoClient;
    var url = 'mongodb://localhost:27017/';

    MongoClient.connect(url, function (err, db) {
        if (err) {
            throw err;
        }

        var eshop = db.db('eshop');

        //var query = { prix: 2000, title: /^SLG/ }

        // order by .sort( { title: -1 } ) // 1 -1

        // find first occu
        /**
         * 
         *         eshop.collection('produits').findOne({prix:2000},function(err,res){
            console.log(res);
            db.close();

        })
         */

        //find many
        /**
         *  eshop.collection('produits').find(query).toArray(function(err,res){
            console.log(res);
            db.close();

        })

        })
         */

        /************************************INSERT********************************* */
        /*var produit = { title:"HP PAVILLION 45", prix:2580, add_date: new Date() };

        eshop.collection('produits').insertOne(produit,function(err,res){
            if (err) throw err;
            console.log("one document inserteed");
            db.close();
        })*/

        /*var produits = [
            { title:"HP PAVILLION 46", prix:2580, add_date: new Date() },
            { title:"HP PAVILLION 47", prix:2580, add_date: new Date() },
            { title:"HP PAVILLION 48", prix:2580, add_date: new Date() },
            { title:"HP PAVILLION 49", prix:2580, add_date: new Date() }
        ];

        eshop.collection('produits').insertMany(produits,function(err,res){
            if (err) throw err;
            console.log( res.insertedCount+" document inserteed");
            db.close();
        })*/



    })





    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})