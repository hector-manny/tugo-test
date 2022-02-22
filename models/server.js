const express = require('express');
const cors = require('cors');

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT || 3002;
        this.midlewars();
        this.routes();
    }

    midlewars(){
        this.app.use(cors());
        this.app.use(express.static("views"));
        this.app.set("view engine", "pug");
        this.app.use(express.json());
    }

    routes(){
        this.app.use("/habitaciones", require('../routes/habitaciones'));
        
    }
    listen(){
        this.app.listen(this.port, () => console.log(`listening on ${this.port}`));
    }
}
module.exports = Server;