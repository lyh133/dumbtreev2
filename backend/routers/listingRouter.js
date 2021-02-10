import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import Listing from '../models/listingModel.js'; 

const listingRouter = express.Router();
listingRouter.get('/', expressAsyncHandler(async (req,res) => {
    const listings = await Listing.find({});
    res.send(listings);
}));

listingRouter.get('/seed', expressAsyncHandler(async (req,res) => {
    await Listing.remove({});
    const createdListings = await Listing.insertMany(data.listings);
    res.send({createdListings});
}));

listingRouter.get('/:id', expressAsyncHandler(async (req,res) => {
    const listing = await Listing.findById(req.params.id);
    if(listing){
        res.send(listing);
    } else {
        res.status(404).send({ message: 'Product Not Found'})
    }
    
}));
export default listingRouter;