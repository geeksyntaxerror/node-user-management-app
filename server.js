const express = require('express');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.urlencoded({extended : true}));

app.use(bodyParser.json());

const dbconfig  = require('./config/database.config.js');
const mongoose  = require ('mongoose');

mongoose.connect(dbconfig.url,{useNewUrlParser : true})
.then(()=>{
    console.log("successfully connect to the db");
}).catch((err)=>{
    console.log("could not connect to db ", err);
    process.exit();
})

app.get('/',(req, res)=>{
    res.json({"message" : "welcome to simple usermanagement app"});
})

require('./app/routes/user.routes.js')(app);

app.listen(3000,()=>{
    console.log("server is listning on port 3000");
})