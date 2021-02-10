import Axios from "axios";
import { HOME_LISTINGS_REQUEST,
         HOME_LISTINGS_SUCCESS,
         HOME_LISTINGS_FAIL,
         LISTING_ID_REQUEST,
         LISTING_ID_SUCCESS,
         LISTING_ID_FAIL
                        
        } from "../constants/listingConstants";

export const Listings_all = () => async (dispatch) => {
    dispatch({
        type: HOME_LISTINGS_REQUEST
    });
    try {
        const {data} = await Axios.get('/api/listings');
        dispatch({ type: HOME_LISTINGS_SUCCESS, payload: data})
    } catch(error){
        dispatch({type: HOME_LISTINGS_FAIL, payload: error.message})
    }
}
//todo

export const Listing_Id = (id) => async (dispatch) => {

    dispatch({
        type: LISTING_ID_REQUEST
    });
    try {
        const {data} = await Axios.get(`/api/listings/${id}`);
        dispatch({ type: LISTING_ID_SUCCESS, payload: data})
    } catch(error){
        dispatch({type: LISTING_ID_FAIL, 
            payload: (
                error.response && error.response.data.message 
                ? error.response.data.message 
                : error.message
                )})
    }
}


//todo