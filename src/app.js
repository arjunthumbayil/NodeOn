const express = require('express');

const app = express();

app.use((req, res)=>{
    res.send("Hello Arjun!");
})

app.use("/test",(req, res)=>{
    res.send("Hello Test!!!!!");
})

app.use("/hello",(req, res)=>{
    res.send("Hello hello hello maan!!");
})

app.listen(3005, () => {
    console.log("Server is sucessfully running on port 3005....");
}); 