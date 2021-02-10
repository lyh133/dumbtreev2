import React from 'react'
export default function Listing(props) {
    const { listing } = props;
    return (
        <div className='content-items'>
        <div key={listing._id} className='item-card'>
        <div className='card-thumb'>
            <a href={`/listings/${listing._id}`} className='thumb-link'>
                <img className='thumb' src={listing.image} alt={listing.title}></img>
            </a>

        </div>
        <div className='card-detail'>

            <h3 className='detail-title'>
                <a href={`/listing/${listing._id}`} >
                    {listing.title}
                </a>
            </h3>

            <div className='detail-price'>
                <span className='price-value'>
                    
                    <span className='price-currency'>$</span>
                    
                    {listing.price}
                </span>
            </div>

            <div className='detail-location'>
                {listing.location}
            </div>
            
            <div className='detail-addWatchlist'>
                <i className="far fa-heart fa-lg"></i>
            </div>
        </div>
        </div>
    </div>
    )
}