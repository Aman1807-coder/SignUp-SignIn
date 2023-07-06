const router = require('express').Router();
const Person = require('../model/model');

router.post('/', ( req, res) => {
    console.log(req.body);

    const person = new Person( {
        name : req.body.name,
        contact : req.body.contact,
        email : req.body.email,
        password : req.body.password
    });

    person.save();
    res.send(JSON.stringify({
        message : "Data Received"
    }));
});

router.post('/signin', async( req, res ) => {
    const user = await Person.findOne({email : req.body.email});
    
    if( user && req.body.password === user.password )
    res.send(JSON.stringify( user ));

    else res.send(JSON.stringify(null));
});

module.exports = router;