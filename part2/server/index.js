const express = require("express")
const mongoose = require("mongoose");
const User = require("./models/User");
const cors = require("cors")
const app = express();



mongoose.connect('mongodb://localhost:27017/user')
    .then((x) => {
        console.log(`Connected to Mongo!`)
    })
    .catch((err) => {
        console.error('Error connecting to mongo', err)
    })
app.use(cors());
app.use(express.json());

app.post('/create', async (req, res) => {
    const { name, age, city, phone } = req.body;
    const user = await new User({
        name: name, age: age, city: city, phone: phone
    }).save();
    res.status(200).send();

})

app.get('/search', async (req, res) => {

    await User.find({ name: req.query.name }, function (err, result) {
        if (err) {
            res.status(404).send(err);
        }
        else {
            res.status(200).send(result);
            
        }
    }).clone().catch(function (err) { console.log(err) })

})
app.listen(3001, () => {
    console.log("listening on 3001")
})