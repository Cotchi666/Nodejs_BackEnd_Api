import express from "express";
import bodyParser from "body-parser";
//lay tham so tu client (query params vd /user?id=7)
import viewEngine from "./config/viewEngine";
import initWebRoutes from './route/web';
import connectDB from "./config/connectDB";
import cors from 'cors';
require('dotenv').config();//goi den ham cofig cua env de chay (process.env.PORT)

let app = express();

//config app

app.use(bodyParser.json({limit :'50mb'}));
app.use(bodyParser.urlencoded({limit :'50mb', extended: true }));
app.use(cors({origin :true }));

viewEngine(app);
initWebRoutes(app);
connectDB();

let port = process.env.PORT || 3000;
//Port === undefined => port = 3000
//chay app
app.listen(port, () => {
    //callback
    console.log("Backend Nodejs is running on the port : " + port)
})