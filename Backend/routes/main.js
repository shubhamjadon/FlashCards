require('dotenv/config');
const express = require('express');
const router = express.Router();
const client = require('../db/config');
const dbName = process.env.DBNAME;
const collection = process.env.COLLECTION;
const ObjectID = require('mongodb').ObjectId;

router.use('/',(req,res,next) => {
    res.db = client.db(dbName).collection(collection);
    next();    
})

router.post('/',(req,res) => {
    res.db.insertOne(req.body).then((err)=>{console.log(err);res.send("done")});
    // console.log(req.bosdy);
})

router.get('/', (req,res)=> {
    res.db.find({}).toArray(function(err,arr){
        if(err) res.json({error: err});
        res.json(arr);
    });
    
})

router.put('/:id', (req,res) => {
    res.db.updateOne({_id: ObjectID(req.params.id)},{$set: req.body}, (err, data) => {res.json(data)});
})

router.delete('/:id', (req,res) => {
    res.db.deleteOne({_id: ObjectID(req.params.id)}, {$set: req.body}, (err, data) => {res.json(data)});
})
module.exports = router;