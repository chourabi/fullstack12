const express = require('express')
const app = express()
const port = 8000
var jwt = require('jsonwebtoken');

var cors = require('cors');
const { createAccount, authenticateAccount } = require('./my-modules/auth');
const { createNewFeed, updateFeed, getAllFeeds } = require('./my-modules/feeds');


app.use(cors());



app.use(function (req, res, next) {

    if (req.url === '/api/signin') {
        next();
    }else if (req.url === '/api/signup') {
        next();
    } else {
        console.log("Request at :" + new Date().toISOString());

        const token = req.headers.authorization;



        if (token != null) {
            try {

                var decoded = jwt.verify(token, 'taherchourabi');
                console.log(decoded) // bar
                next();
            } catch (error) {
                res.send({ success: false, message: "session expired !" })
            }
        } else {
            res.send({ success: false, message: "Access denied !" })
        }
    }

});
 

 
 

app.post('/api/signup',(req,res)=>{
    createAccount(req,res)
});

app.post('/api/signin',(req,res)=>{
    authenticateAccount(req,res)
});


app.post('/api/feed/add',(req,res)=>{
     createNewFeed(req,res);
});

app.post('/api/feed/update',(req,res)=>{
    updateFeed(req,res);
});

app.get('/api/feed/list',(req,res)=>{
    getAllFeeds(req,res);
});



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})