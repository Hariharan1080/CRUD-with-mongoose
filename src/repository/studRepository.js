const studmodels = require('../models/studmodels.js');
const mongoose = require ('mongoose');
const createStud = async (data)=>{
    try{
    const cResult = await studmodels.create(data);
    console.log(cResult, 'atrepo')
    return cResult;
    }catch(error){
        console.log(error);
        
    }
};
const updateStud = async (payload,_id)=>{
    try{
        const id = new mongoose.Types.ObjectId(_id);
        const uResult = await studmodels.findByIdAndUpdate(id, payload,
            {new:true,runValidators:true},
        );
        return  uResult;
    }catch(error){
        console.log(error);
        
    }
};

const deleteStud = async (_id)=>{
    try{
        const id = new mongoose.Types.ObjectId(_id);
        const dResult = await studmodels.deleteOne({_id:id});
        return dResult;
    }catch(error){
        console.log(error);
        
    }
};

const getStud = async (_id)=>{
    console.log(_id);
    
    try{
        const id = new mongoose.Types.ObjectId(_id)
        const gResult = await studmodels.find({_id:id});
        return gResult;
    }catch(error){
        console.log(error);
        
    }
}

module.exports = {
    getStud,
    deleteStud,
    createStud,
    updateStud
}