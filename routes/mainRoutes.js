const express = require('express');
const router = express.Router();
const route_model = require("../models/RequestModel");
const checkParameter = require("../middlewear/checkParameter");

// Create post method for get records from DB.

router.get('/test', function (req, res) {
    res.send('hello world2')
});

 router.post('/',(req,res)=>{

    const params  = req.body;

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
        res.json(err);
    })
});
 module.exports = router;