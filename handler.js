
const requestHandler =(req,res)=>{
  console.log(req.url, req.method);
  if(req.url==='/'){
    res.setHeader('Content-Type','text/html');
    res.write(`<html>
      <head><title>Practice Page</title></head>
      <body>
      <h1>Welcome to the Practice Page</h1>
      <a href = "/calculator">Go to Calculator
      </body>
      <



    </html>`);
  }
}