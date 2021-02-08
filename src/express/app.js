const express = require('express');
require('../db/mongoose');
const cors = require('cors');
const app = express();
const User = require('./models/user');

const port = process.env.PORT || '5000';

app.use(express.json())
app.use(cors());

app.post('/users', async (req, res) => {
    const user = new User(req.body);
    try {
        await user.save();
        res.status(201).send(user)
    } catch (e) {
        res.status(500).send({message: 'something went wrong ' + e})
    }
})

app.get('/users', async (req, res) => {
    try{
        const users = await User.find({});
        if(users.length === 0){
            throw new Error('Users not found')
        }
        res.status(200).send(users);
    } catch (e) {
        res.status(404).send({message: e})
    }
})

app.put('/users', async (req, res) => {
    try{
        const {id} = req.query;
        const user = await User.findById(id);
        if(!user){
            throw new Error('User not found')
        }
        user.isReCalled = !user.isReCalled;
        await user.save();
        res.status(200).send(user);
    } catch (e) {
        res.status(404).send({message: e})
    }
})

app.get('*', async (req, res) => {
    res.send('unknowm endpoint')
})


app.listen(port, () => console.log('we are on ' + port + ' port'))
