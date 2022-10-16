
const express = require('express');
const dbConnect = require('./mongodb');
const mongodb = require('mongodb');
const app = express();

const port = process.env.PORT || 9000;

//read data from Database
app.get('/', async (req, resp)=>{
    let data = await dbConnect();
    data = await data.find().toArray();
    resp.send(data);
    // console.log(data);
})

app.use(express.json());

//insert data in Database
app.post('/', async (req, resp)=>{
    let data = await dbConnect();
    data = await data.insertOne(req.body);
    resp.send(req.body);
    // console.log(req.body);
    
})


//put data in Database
app.put('/',async (req, resp)=>{
    let data = await dbConnect();
    data = await data.updateOne({name:req.body.name}, {$set:req.body});
    resp.send(data);
    // console.log(data);
})


//delete data in Database
app.delete('/:name', async (req, resp)=>{
    let data = await dbConnect();

    // data = await data.deleteOne({_id: new mongodb.ObjectId(req.params.id)});
    // data = await data.deleteMany({name:req.params.name});

    data = await data.deleteOne({name:req.params.name});
    resp.send(data);
    console.log(data);
});

app.listen(port, ()=>{
    console.log(`server is run on port ${port}`);
})
