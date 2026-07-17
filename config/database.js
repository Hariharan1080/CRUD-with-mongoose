const mongoose = require('mongoose');


async function connectdb(){
    
    try{
         await mongoose.connect("mongodb://localhost:27017/school");

        console.log("mongodb connected successfully");
        
    }catch(error){
        console.log(error);
        
    }
};

module.exports = {
    mongoose,
    connectdb
}