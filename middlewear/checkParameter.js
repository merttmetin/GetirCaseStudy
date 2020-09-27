const error  = require("./errorHandling");

// Check parameter type in request body.
module.exports.checkParameterDataType = (req,res,next)=>{

   const params = req.body;
   //Regex for YYYY-MM-DD format.
   const dateRgx = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;

   if((typeof params.startDate  === "string" && params.startDate.match(dateRgx))
      &&(typeof params.endDate  === "string"  && params.endDate.match(dateRgx)
      &&(typeof params.minCount === "number")
      &&(typeof params.maxCount === "number"))
      )
   {
         next();
   }
   else{
      error.wrongParameterType(res);
   }
}

//Check parameters in request body.(Is missing or undefined).
module.exports.checkParameterIsMissing = (req,res,next)=>{
   const params = req.body;
   if(Object.keys(req.body).length<4){
      error.missingParameter(res);
   }
   else if(params.startDate === undefined 
          ||params.endDate === undefined
          ||params.minCount === undefined
          ||params.maxCount  === undefined){
         
      error.missingParameter(res);
   }
   else{
      next();
   }
}
