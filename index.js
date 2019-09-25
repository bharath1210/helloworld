'use strict';
const express = require('express');
const app = express();
const port = process.env.PORT || 4000;


app.get('/',(req, res)=>{
    console.log('Successfully hit ')
    res.send('welcome to docker !!!')
})

app.listen(port, ()=>{
    console.log(`server started at port ${port}`)
})