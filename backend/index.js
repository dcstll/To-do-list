const express = require("express");
const mongoose = require("mongoose");

const port = 3030;
const app = express();

const todoRoutes = require("./routes/todoRoutes");

/* const connectionOptions = {useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false}; */

app.use(express.json()); // a method to send data 

mongoose.set('strictQuery', false);

const user ="administrador";
const password = 'Admin1342*';
const dbname = 'toDoApp';

const url = `mongodb+srv://${user}:${password}@todolist.xxqocxq.mongodb.net/${dbname}?retryWrites=true&w=majority`;
mongoose.connect(url).then(()=>console.log("Conexion exitosa")).catch((err)=> console.error(err));

app.use("/toDos", todoRoutes);

app.listen(port, () =>{
    console.log("The server is listening on port: " + port);
});
