const express = require('express')
const app = express()
const port = 8000
var jwt = require('jsonwebtoken');

var cors = require('cors');


app.use(cors());



app.use(function (req, res, next) {

    if (req.url === '/api/auth') {
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

app.get('/', (req, res) => {
    res.send('welcome to our app')
})


app.post('/api/auth', (req, res) => {
    var body = [];
    req.on('data', (c) => {
        body.push(c);
    }).on('end', () => {
        //[1,1,0,0,1,0,1,0,1]

        let textData = Buffer.concat(body).toString();
        let JsonBody = JSON.parse(textData);

        if (JsonBody.username === 'admin' && JsonBody.password === 'admin') {
            // generate a new token for the user
            var token = jwt.sign(

                {
                    user: 'admin',
                    iat: Math.floor(Date.now() / 1000),
                    exp: Math.floor(Date.now() / 1000) + (60 * 60),
                },

                'taherchourabi');
            console.log(token);

            res.send({ success: true, token: token })
        } else {
            res.send({ success: false, message: 'Wrong username or password' })
        }



    });


})

app.get('/movies', (req, res) => {
    res.send([{ title: "Titanic" }, { title: "007" },])
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})