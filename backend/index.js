import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
const app = express();
import Connection from './database/db.js'
import Route from "./routes/route.js"

app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}))
app.use('/', Route);

Connection();

const PORT = 8000;
app.listen(PORT, () =>{
    console.log(`server is running successfuly on PORT ${PORT}`);
})