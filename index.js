import bodyParser from "body-parser";
import express from "express";


const port = 3000;
const app = express();

//app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("public"));


app.get("/", (req, res)=>{
    console.log("selam");
    res.render("index.ejs");
});

app.listen(port, (req, res)=>{
    console.log("Litening to port: " + port);
});
