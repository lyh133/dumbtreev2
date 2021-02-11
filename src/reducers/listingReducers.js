const { 
    HOME_LISTINGS_REQUEST,
    HOME_LISTINGS_SUCCESS,
    HOME_LISTINGS_FAIL,
    LISTING_ID_REQUEST,
    LISTING_ID_FAIL,
    LISTING_ID_SUCCESS,} = require("../constants/listingConstants");

export const homeListingReducer = (state = { listings: [] }, action) => {
    switch(action.type) {
        case HOME_LISTINGS_REQUEST:
            return {loading: true};
        case HOME_LISTINGS_SUCCESS:
            return {loading: false, listings: action.payload};
        case HOME_LISTINGS_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state;
    }
}

export const ListingPageReducer = (state = { listing: [] }, action) => {
    switch(action.type) {
        case LISTING_ID_REQUEST:
            return {loading: true};
        case LISTING_ID_SUCCESS:
            return {loading: false, listing: action.payload, redirect: '/listings/'+action.payload._id};
        case LISTING_ID_FAIL:
            return {loading: false, error: action.payload, redirect: '/listings/'+action.payload._id}
        default:
            return state
    }

}