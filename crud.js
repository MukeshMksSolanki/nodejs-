

const dbConnect = require('./mongodb');

const read = async ()=>{
    let conn = await dbConnect();
    result = await conn.find().toArray();
    console.log(result); 
}

// read();


const create = async ()=>{
    let conn = await dbConnect();
    result = await conn.insert([
        {
            name:'xyz',
            last:'abc',
            age:25,
            education:'graduation'
        },
        {
            name:'abc',
            last:'xyz',
            age:26,
            education:'graduation'
        }
    ]);
    console.log(result); 
}

// create();



const updData = async ()=>{
    let conn = await dbConnect();
    let result = await conn.updateOne({name:'abc'}, {$set:{name:'pqr', last:'stv'}});
    console.log(result); 
}

// updData();



const dltData = async ()=>{
    let conn = await dbConnect();
    result = await conn.deleteMany({name:'xyz'});
    console.log(result); 
}

// dltData();

