
const sumRequestHandler =(req,res)=>{
  console.log("In sum requesst handler" ,req.url);
  req.on('data',chunk =>body.push[chunk ]);
  req.on('end',()=>{
    const bodyStr = Buffer.concat(body).toString();
    const params = new URLSearchParams(bodyStr);
    const bodyObj =Object.fromEntries(params);
    console.log(bodyObj);
    const result = bodyObj.first+ bodyObj.second;
    console.log(result);
  })
}
exports.sumRequestHandler = sumRequestHandler;