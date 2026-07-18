const studRepo = require('../repository/studRepository.js');

const studCreate = async (data)=>{
    try {
        const c_result = await studRepo.createStud(data);
    return c_result; 
    } catch (error) {
        console.log(error);
        
    }
    
};

const studUpdate = async (payload,_id)=>{
    
    try{
        const u_result = await studRepo.updateStud(payload,_id);
        return u_result;
    }catch(error){
        console.log(error);
        
    }
};

const studDelete = async (_id)=>{
    try{
        const d_result = studRepo.deleteStud(_id);
        return d_result;
    }catch(error){
        console.log(error);
        
    }
};

const studGet = async (_id)=>{
    console.log(_id ,"service");
    
    try{
        const g_result = await studRepo.getStud(_id);
        return g_result;
    }catch(error){
        console.log(error);
        
    }
};

module.exports = {
    studCreate,
    studDelete,
    studGet,
    studUpdate,
}