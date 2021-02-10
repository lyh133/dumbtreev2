import React from 'react';

export default function SearchBar(props) {
    return (
        <div className='search-bar-wrapper'>
        <div className={props.background ? 'search-form-wrapper' : 'search-form-wrapper noBackground'}> 

            <form className='search-form' action="">

                <ul className='search-bar-list'>
                    <li className='search-bar-dropdown search-bar-item'>

                        <div className='sbdb-wrapper'>
                            <i className="fas fa-bars"></i>
                            All Categories   
                            <i className="sbd-icon fas fa-chevron-down"></i>

                            <div className='search-bar-dropdown-content'>
                                <div id="sbdc-head" value="All categories">
                                    <i className="fas fa-bars sbdc-icon"></i>
                                    All categories
                                </div>
                                <div value="Electronics">
                                    <i className="fas fa-laptop sbdc-icon"></i>
                                    Electronics
                                </div>
                                <div value="Vehicles">
                                    <i className="fas fa-car sbdc-icon"></i>
                                    Vehicles
                                </div>
                                <div value="Miscellaneous">
                                    <i className="fas fa-shopping-cart sbdc-icon"></i>
                                    Miscellaneous
                                </div>
                            </div>

                        </div>
                    </li>

                    <li className='search-bar-keyword'>
                        <div className='search-bar-wrapper'>

                            <input placeholder="I'm looking for..." className='search-input' type="text"></input> 

                        </div>
                    </li>
                    <li className='search-bar-location'>
                        <div className='sbl-wrapper'>
                            <i className="fas fa-map-marker-alt"></i>
                            Perth Region, WA
                        </div>
                    </li>
                    <li className='search-bar-distance'>
                        <div className='sbd-wrapper'>
                            +0km
                            <i className="sbd-icon fas fa-chevron-down"></i>
                        </div>
                        
                    </li>
                    <li className='search-bar-button'>
                        <div className='sbb-wrapper'>
                            <i className="fas fa-search fa-2x"></i>
                        </div>
                                                      
                    </li>
                </ul>

            </form>
        </div>
    </div>
    )
}