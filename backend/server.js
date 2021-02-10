import express from 'express';
import userRouter from './routers/userRouter.js';
import listingRouter from './routers/listingRouter.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
mongoose.connect(process.env.MONGODB_URL ||'mongodb://localhost/dumbtree',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

app.use('/api/users', userRouter);
app.use('/api/listings', listingRouter);

app.use((err,req,res,next) => {
    res.status(500).send({message: err.message});
})

app.get('/', (req, res) => {
    res.send('Server is ready');
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`server at ${port}`);
})