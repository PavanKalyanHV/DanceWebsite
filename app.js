const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const bodyparser = require("body-parser")
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/contactUs")

////////////////////////MONGOOSE//////////////////
var contactSchema = new mongoose.Schema({
    'first-name':String,
    'last-name':String,
    'phone-no':Number,
    address:String,
    concern:String
});

const contact = mongoose.model('contact',contactSchema);

/////////////////////////////////////////////////////

const port = 1999;

app.use("/static",express.static('static'));
app.use(express.urlencoded());

app.set('view engine','pug')

app.set('views',path.join(__dirname,'views'));

app.get("/",(req,res)=>{
    function isActive(url){
        let currentUrl = req.url;
        return url==currentUrl
    }
    res.status(200).render('index.pug',{isActive})
})

app.get("/aboutus",(req,res)=>{
    function isActive(url){
        let currentUrl = req.url;
        return url==currentUrl
    }
    res.status(200).render('aboutus.pug',{isActive})
})

app.get("/trainee",(req,res)=>{
    function isActive(url){
        let currentUrl = req.url;
        return url==currentUrl
    }
    res.status(200).render('trainee.pug',{isActive})
})

app.get("/service",(req,res)=>{
    function isActive(url){
        let currentUrl = req.url;
        return url==currentUrl
    }
    res.status(200).render('service.pug',{isActive})
})

app.get("/contactus",(req,res)=>{
    function isActive(url){
        let currentUrl = req.url;
        return url==currentUrl
    }
    res.status(200).render('contact.pug',{isActive})
})

app.post("/contact",(req,res)=>{
    var mydata =  new contact(req.body);
    mydata.save()
        .then(()=>{
            res.status(200).send("Data Saved");
        })
        .catch(()=>{
            res.status(400).send("Data not saved to db")
        });
});

app.get("/feestructure",(req,res)=>{
    function isActive(url){
        let currentUrl = req.url;
        return url==currentUrl
    }
    res.status(200).render('feestructure.pug',{isActive})
})

app.listen(port,()=>{
    console.log(`Website launching in Port : ${port}`)
})
