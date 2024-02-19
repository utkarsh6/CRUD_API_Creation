const mongoose = require ('mongoose');

async function connectMangoDB(){
 return mongoose.connect('mongodb://127.0.0.1:27017/BackendPractice').then(()=>console.log
("MongoDB connected")).catch(()=>console.log("Error",err))

}

module.exports= {
    connectMangoDB,
};