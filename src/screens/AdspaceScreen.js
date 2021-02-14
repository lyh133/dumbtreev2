import React,{ useState, useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import Header2 from '../components/Header2';
import MessageBox from '../components/MessageBox';
import LoadingBox from '../components/LoadingBox';
import Adcard from '../components/Adcard';
import './Adspace.css';
export default function AdspaceScreen(props) {

    const dispatch = useDispatch();
    const homeListings = useSelector((state) => state.homeListings);
    const { loading, error, listings } = homeListings;
    var filteredList = listings;
    const params = new URLSearchParams(window.location.search)



    //searching item is done in the front-end for now
    const filterCategory = () => {
        const category=params.get('category')
        if(category !== "All categories"){
            filteredList = listings.filter( i => { return i.category === category })
        }
    }

    const filterLocation = () => {
        const location =params.get('location')
        var newlist = [];
        if(location !== null){
            const llist = location.split(',')
            for(var i=0; i<llist.length;i++){
                
                for(var j=0; j<filteredList.length; j++){

                    if(filteredList[j].location.includes(llist[i])){
                        newlist.push(filteredList[j])
                    }
                }
            }
        }
        filteredList=newlist;   
    }

    filterLocation();
    filterCategory();

    return(
        <>
        <Header2 searchbar={true}/>
        <div className="adspace-container">
            {loading ? (<LoadingBox />)                 
                : 
                error ? (<MessageBox variant="danger">{error}</MessageBox>)
                :
                filteredList ? (
                    <>
                        {filteredList.map(listing =>(                    
                            <Adcard 
                                image={listing.image} 
                                title={listing.title}
                                detail={listing.detail}
                                price={listing.price}
                                location={listing.location}
                                negotiable={listing.negotiable}
                                dateListed={listing.dateListed}
                            />
                    ))}
                    
                    
                    </>)
                : null                
            }        
        </div>
        </>
    )


}


