const express = require("express");
const bodyParser = require("body-parser");

const newcity = require('./repo/city-repo');

const {PORT} = require('./config/serverConfig');

const setupAndStartServer = async () => {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    
    app.listen(PORT, ()=>{
        console.log(`Server is running on port ${PORT}`);
        const fcity = new newcity(); //(line no. 4 (newcity))
        fcity.createCity({name: "Delhi"});
    })

}
setupAndStartServer();