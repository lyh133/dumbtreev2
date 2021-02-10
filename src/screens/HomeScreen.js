import React, { useEffect } from 'react'
import Listing from '../components/Listing';
import MessageBox from '../components/MessageBox';
import LoadingBox from '../components/LoadingBox';
import { useSelector, useDispatch } from 'react-redux';
import { Listings_all } from '../actions/listingActions';
import { useHistory } from "react-router-dom";
import SearchBar from '../components/SearchBar';

export default function HomeScreen() {

    const dispatch = useDispatch();
    const history = useHistory();
    const homeListings = useSelector((state) => state.homeListings);
    const { loading, error, listings } = homeListings;

    const refreshPage = ()=>{
        window.location.reload();
     }

    useEffect(() => {
        dispatch( Listings_all());
    },[dispatch]);

    return (
        <>
        <div className='main-panel'>
            <img onClick={refreshPage} className="main-bg mouse-pointer" src="./images/ddt.jpg" alt=""></img>
            <img onClick={refreshPage} className="main-logo mouse-pointer" src="./images/gt.png" alt=""></img>

            <SearchBar background={true}/>
        </div>
        
        <div className='main-items'>
            <div className='item-tabs'>
                <ul>
                    <li>
                        <a>HomePage Gallery</a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a>Recently Viewed</a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a>Watchlist</a>
                    </li>
                </ul>

            </div>
            {loading ? (<LoadingBox />)                 
                : 
                error ? (<MessageBox variant="danger">{error}</MessageBox>)
                : (<div className='main_content-container'>

                        <div className='main-content'>

                            {listings.map(
                                (listing) => (
                                    <Listing key={listing._id} listing = {listing }></Listing>
                                )
                            )}

                        </div>
                    </div>
                )
                
            }


        </div>

    </>
    )}