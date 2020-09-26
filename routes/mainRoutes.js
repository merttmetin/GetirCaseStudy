const express = require('express');
const router = express.Router();
const route_model = require("../models/requestModel");
const checkParameter = require("../middlewear/checkParameter");
const error =require("../middlewear/errorHandling");



// Create post method for get records from DB.
 router.post('/',checkParameter.checkParameterIsMissing,(req,res)=>{
    route_model.aggregate([{
        $project:{
            _id :false,
            key : true,
            createdAt : true,
            totalCount:{ $sum: "$counts" },
           
        }
    },
    {
        $match :{ $and :[{"createdAt": {$gte : new Date(req.body.startDate),$lte : new Date(req.body.endDate)}}
                        ,{"totalCount": {$gte: req.body.minCount, $lte :  req.body.maxCount}}]
                }
    }
    ]).exec().then(data=>{res.status(200).json({
        code :"0",
        msg :"success",
        records : data
    })
    res.json(mainRoute);
    }).catch((err) => {
        error.sysError(res,err);
    })
});
 module.exports = router;