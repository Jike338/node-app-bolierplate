const express = require("express");
const path = require("path");
const app = express();
const server = require("http").createServer(app);
const bodyParser = require('body-parser');
const port = process.env.PORT || 2021; //to support heroku 
// const mongoose = require('mongoose'); //for database connection

app.use(express.json()); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./client")));

app.get("/api/ping", function (req, res) {
    return res.send("Backend connected!");
});

// Handles other requests and redirect to index.html
app.get("*", (req,res) =>{
    res.sendFile(path.join(__dirname+"/views/index.html"));
});

server.listen(port, () => {
    console.log(`Server running on port ${port}.`)
}, (err) => {
    console.log(err);
});


// mongoose.connect("URL", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false,
//     useCreateIndex: true
// }, (err) => {
//     if (err) {
//         console.log("Error in DB Connection" + err);
//     } else {
//         console.log("Connected Successfully");
//     }
// });