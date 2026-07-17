const { connectdb } = require('./config/database.js');
const express = require('express');
const studRoute = require('../project1/src/router/studRouter.js');

const exp = express();

try{
    connectdb();

}catch(error){
    console.log(error);
    
}
exp.use(express.json());

exp.use("/api/students",studRoute);

let PORT =3000;

exp.listen(PORT,'localhost', ()=>{
    console.log("serrver connected");
    
});