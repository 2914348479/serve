const express=require('express');

const app=express()

app.get('/',(req,res)=>{
    res.send('hello')
})

app.listen(4545,()=>{
    console.log('listening on port 4545');
})