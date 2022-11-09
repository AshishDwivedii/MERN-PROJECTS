const express = require('express');
const app= express();
const mongoose = require('mongoose')
const router= require('./routes/book-routes');
const port  = process.env.PORT || 5000
const cors = require('cors');

//middlewares
app.use(express.json());
app.use(cors());  //for providing access to the db for thrid party
app.use('/books', router);

        //DB CONNECTION
const opts={
    autoIndex:false,
    family:4,
    useUnifiedTopology:true
}
mongoose.connect("mongodb://localhost:27017/bookstore",opts)
.then(()=>{
    console.log("Connected to db")
})
.catch((err)=>{
    console.log("error in connection",err);
})


        //LISTENING AT PORT
app.listen(port, (err)=>{ 
    if(!err){
        console.log(`started listening  at ${port}`)
    }else{
    console.log(err)
    }
})