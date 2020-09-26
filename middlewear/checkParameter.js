
const error  = require("./errorHandling");


// Check parameters in request body.(Is missing or undefined).

module.exports.checkParameterIsMissing = (req,res,next)=>{
   
   const params = req.body;

   if(Object.keys(req.body).length<4){
      error.missingParameter(res);
   }
   else if(params.startDate == undefined 
          ||params.endDate == undefined
          ||params.minCount == undefined
          ||params.maxCount  == undefined){
         
      error.missingParameter(res);
   }
   else{
      next();
   }
}

//Check parameters type in request body.(Required format , data type ) 
// module.exports.