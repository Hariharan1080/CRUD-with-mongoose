const { mongoose } = require('../../config/database.js');

const detalSchema = new mongoose.Schema({

    studentId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"students",
        required : true
    },

     dob:{
        type: String,
        required:true,
     },
     city:{
        type:String,
        required:true,
     },
     ph:{
        type:String,
        required:true,
        unique:true
     }
});

module.exports = mongoose.model("details",detalSchema);