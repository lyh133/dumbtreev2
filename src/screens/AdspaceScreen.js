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

    const params = new URLSearchParams(window.location.search)



    //searching item is done in the front-end for now
    const filterCategory = (list) => {
        const category=params.get('category')
        if(category !== "All categories"){
            return list.filter( i => { return i.category === category })
        }
        return list;
    }

    const filterLocation = (list) => {

        const location =params.get('location')
        if(location === ''){
            return list;
        }
        var newlist = [];
        if(location !== null){
            const llist = location.split(',')
            for(var i=0; i<llist.length;i++){
                
                for(var j=0; j<list.length; j++){

                    if(list[j].location.includes(llist[i])){
                        newlist.push(list[j])
                    }
                }
            }
        }
        return newlist;  
    }
    const filterKeyword = (list) => {
        
        const input =params.get('input');
        if(input === null) {
            return list;
        }
        var newlist = [];
        for(var i=0; i<list.length; i++){
            console.log(list[i].title)
            console.log(input)
            if(list[i].title.includes(input)){

                newlist.push(list[i]);
            }
        }
        return newlist;
    }

    const applySearchFilter = (list) => {
        return filterKeyword(filterLocation(filterCategory(list)))
    }

    return(
        <>
        <Header2 searchbar={true}/>
        <div className="adspace-container">
            {loading ? (<LoadingBox />)                 
                : 
                error ? (<MessageBox variant="danger">{error}</MessageBox>)
                :
                listings ? (
                    <>
                        {applySearchFilter(listings).map(listing =>(                    
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


