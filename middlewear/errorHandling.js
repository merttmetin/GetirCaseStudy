// const error ={};

// // kullanıldı.
// // Error Type  : Wrong endpoint for service.
// error.notFound = res => {
//     res.status(404).json({
//       code: 104,
//       msg: 'Wrong service endpoint.Please Check !'
//     });
// };

// // Error Type  : 
// error.sysEror = res => {
//     res.status(500).json({
//       code: 100,
//       msg: 'Unexpexted error has occured.'
//     });
// };

// // Error Type :  Wrong or invalid parameter type in request body.
// error.wrongParameterType = res => {
//     res.status(400).json({
//       code: 101,
//       msg: 'Unexpexted type for request.Please check!'
//     });
// };

// // Error Type  : Parameter was missing for request.
// error.missingParameter = res => {
//     res.status(400).json({
//       code: 102,
//       msg: 'One or more parameter missing. Please make sure your request body as sample in Readme file.'
//     });
// };



// // DB Connection Failed
// error.dbError =(res,err)=>{
//     res.status(400).json({
//         code: 105,
//         msg: 'One or more parameter missing. Please make sure your request body as sample in Readme file.'
//     });
// }

// module.exports = error;