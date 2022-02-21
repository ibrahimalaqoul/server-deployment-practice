'use strict';

const express = require('express');
const myapp = express();

function serverCheck(port){
    myapp.listen(port,()=>{
        console.log(`server is running on ${port} PORT`);
    })

}
myapp.get('/',(req,res)=>{
    res.status(200).send('This is The Home page')
})
myapp.get('/data',(req,res)=>{
    res.status(200).json({
        Name : 'Ibrahim',
        email : 'alaqoulibrahim@gmail.com'
    })
})

myapp.get('/*',(req,res)=>{
    res.status(404).send('Not found')
})


module.exports = {
    myapp : myapp,
    serverCheck : serverCheck
}