let express = require("express");
let app = express();
app.use(express.json());
app.get("/student.read", (req, res) => {
  res.send("student view api  from Express");
});
app.post("/student.insert", (req, res) => {
   let myDB =await dbConnection();
   let studentCollection = myDB.collection("student")
  res.send("student insert api from Express");
});
app.listen(3000, () => {
  console.log("server started on port 3000");
});
