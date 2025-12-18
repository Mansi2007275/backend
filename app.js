

const http =require("http");
const requireHandler = require('./handler')
const server = http.createServer();

const PORT =3000;
server.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}`);
});