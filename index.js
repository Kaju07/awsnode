const express=require('express')
const app=express()

app.listen(5000,()=>{console.log('listning on 5000')})

app.get('/',(req,res)=>{
    console.log('in getr')
    res.send('hello')
})