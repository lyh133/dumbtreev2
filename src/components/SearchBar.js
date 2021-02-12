import React,{ useState } from 'react';
const apikey = '2865959f75b7484aab4478400e7239d4';

export default function SearchBar(props) {

    const [isDropdown, setDropdown] = useState(false);
    const [category, setCategory] = useState("All categories");
    const [icon, setIcon] = useState("fas fa-bars");
    const [userLocation,setLocation] = useState(null);
    const handleDropDown = () => {
        setDropdown(!isDropdown);
    }

    const handleChangeCategory = (category, icon) => {
        setCategory(category);
        setIcon(icon);
        getPosition();
    }

    const getPosition = () => {
        if(window.navigator.geolocation) {
            window.navigator.geolocation
            .getCurrentPosition(showPosition, posError);
        }
    }

    const showPosition = (positions) => {
        let lat = positions.coords.latitude;
        let long = positions.coords.longitude;
        getAddress(lat,long)

    }
    const posError = () => {
        if(window.navigator.permissions){
            window.navigator.permissions.query( { name: 'geolocation' }).then(res =>{
                if(res.state ==='denied'){
                    alert('Enable location permission in browser setting to use location')
                }
            })
        } else {
            alert('Unable to access your location')
        }
    }
    const getAddress = (lat,long) => {        
        fetch(`https://api.opencagedata.com/geocode/v1/json?q=${lat}+${long}&key=${apikey}`)
            .then(res => res.json())
            .then(address => setAddress(address))

    }
    const setAddress = (address) => {
        const suburb = address.results[0].components.suburb ? address.results[0].components.suburb : ''
        const postcode = address.results[0].components.postcode ? address.results[0].components.postcode : '';
        const state = address.results[0].components.state_code ? address.results[0].components.state_code : '';
        console.log(userLocation) 
        if(userLocation === null){
            setLocation([suburb,postcode,state])
        }
    }

    getPosition();
    return (
        <div className='search-bar-wrapper'>
        <div className={props.background ? 'search-form-wrapper' : 'search-form-wrapper noBackground'}> 

            <form className='search-form' action="">

                <ul className='search-bar-list'>
                    <li onClick= { handleDropDown } className={isDropdown ? 'search-bar-dropdown  green' : 'search-bar-dropdown  deactivatedDropDown'}>

                        <div className='sbdb-wrapper'>
                            <i className={icon +" sbdc-icon"}></i>
                            <span className = {isDropdown ? 'whiteFont': 'blackFont'}>{category}</span>
  
                            <i className="sbd-icon fas fa-chevron-down"></i>

                            <div className={isDropdown ? 'search-bar-dropdown-content show' : 'search-bar-dropdown-content'}>
                                <div 
                                    onClick = { () => {handleChangeCategory("All categories","fas fa-bars" )} } 
                                    id="sbdc-head" value="All categories">
                                    <i className="fas fa-bars sbdc-icon"></i>
                                    All categories
                                </div>
                                <div 
                                    onClick = { () =>{handleChangeCategory("Electronics","fas fa-laptop" )} } 
                                    value="Electronics">
                                    <i className="fas fa-laptop sbdc-icon"></i>
                                    Electronics
                                </div>
                                <div 
                                    onClick = { () => {handleChangeCategory("Vehicles","fas fa-car" )} }
                                    value="Vehicles">
                                    <i className="fas fa-car sbdc-icon"></i>
                                    Vehicles
                                </div>
                                <div 
                                    onClick = { () => {handleChangeCategory("Miscellaneous","fas fa-shopping-cart" )} } 
                                    value="Miscellaneous">
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
                            {userLocation ? userLocation[0]+" "+userLocation[1] +","+userLocation[2] :null}
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