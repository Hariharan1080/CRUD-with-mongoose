const studService = require('../service/studService.js');

const create = async  (req,res)=>{
    
    try{
        const payload = req.body;
        console.log(payload);

        const result = await studService.studCreate(payload);
console.log(result, 'at contorller')
                res.status(200).json({
                message:"student created successfully",
                data:result,
                });
    
        }catch(error){
        console.log(error);
        
    }
}


const update = async (req,res)=>{
    const payload = req.body;
    const _id = req.params._id;
    const result = await studService.studUpdate(payload,_id);

    res.status(200).json({
        message : "students updated successfully",
        data : result,
    });
};

const del = async (req,res)=>{
   
    try{
    const _id = req.params._id;
    const result = studService.studDelete(_id);
    
            res.status(200).json({
            message : "student deleted successfully",
            success:true,
             result,
            });
}catch(error){
    console.log(error);
    
}
}

const get = async (req,res)=>{
    try{
        const _id = req.params._id;

        const result = await studService.studGet(_id);

        res.status(200).json({
            message:"student fetched successfully",
            data : result,
        });
    }catch(error){
        console.log(error);
        
    }
};

module.exports = {
    create,
    update,
    del,
    get
};