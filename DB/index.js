import express from 'express';
import path from 'path';
import mongoose from 'mongoose';


const app=express();
const PORT=8000;

import userRouter from './routes/user.routes.js';

mongoose.connect('mongodb+srv://Recursive123:recursive123@recursive1.za2hlzu.mongodb.net/?retryWrites=true&w=majority&appName=Recursive1')
.then((e)=>console.log("MongoDB Connected"));


app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

//app.use(express.json)
app.use("/uploads",express.static("uploads"));
app.use(express.urlencoded({ extended: false}));

app.get("/", (req, res) => {
    return res.render("home.ejs");
});

app.use('/user',userRouter);
app.listen(PORT, () => {console.log(`Server started at PORT: ${PORT}`);});  