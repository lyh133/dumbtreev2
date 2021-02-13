import React,{ useState, useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import Header2 from '../components/Header2';
import './Adspace.css';
export default function AdspaceScreen(props) {



    return(
        <>
        <Header2 searchbar={true}/>
        <div className="adspace-container">
            

            <div className="adspace-cards">

                <a className="adspace-card">
                    <div className="adspace-img-wrap1">
                        <div className="adspace-img-wrap2">
                            <img src='./images/rb15.jpg' alt='rb15'></img>
                        </div>
                    </div>
                    <div className='adspace-card-left'>
                        <div className="adspace-card-left-title">
                            title this is a tilte fesfsdf dsf s sfsd okokok  dsafsda asdf 
                        </div>
                    </div>
                </a>
                <a className="adspace-card">
                    <div className="adspace-img-wrap1">
                        <div className="adspace-img-wrap2">
                            <img src='./images/rb15.jpg' alt='rb15'></img>
                        </div>
                    </div>
                    <div className='adspace-card-left'>
                        <div className="adspace-card-left-title">
                            title this is a tilte fesfsdf dsf s sfsd okokok fdadfsad asd sad 
                        </div>
                        <textarea className="adspace-card-left-desc">
                            wowowowowoowowodfwefe\nfdsfsdfsdn\n
                        </textarea>
                    </div>

                    <div className='adspace-card-right'>
                        <div className="adspace-card-right-top">
                            <div className="adspace-card-right-price">
                                $500
                            </div>
                            <div className="adspace-card-right-nego">
                                Negotiable
                            </div>
                        </div>
                        <div className="adspace-card-right-location">                       
                            beechboro, WA
                        </div>
                        <div className="adspace-card-right-date">                      
                            01/01/2021
                        </div>
                        <div className="adspace-card-right-watch">
                            <i className="far fa-heart fa-lg"></i>
                        </div>
                    </div>
                </a>                    
            </div>
        
        
        </div>
        </>
    )


}


