//import
const express = require('express');
const cors = require('cors');

//implementasi
const app = express();
app.use(cors());

//endpoint admin
const admin = require('./routes/admin');
app.use("/admin", admin)

//endpoint customer
const customer = require('./routes/customer');
app.use("/customer", customer)

//endpoint product
const product = require('./routes/product');
app.use("/product", product)

//run sarver
app .listen(8000, ()=>{
    console.log('server run on port 8000')
})