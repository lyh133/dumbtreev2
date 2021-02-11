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
        saveViewHistory(id)
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
//save view history onto localstorage
const saveViewHistory = (id) => {
    const viewHistoryList = JSON.parse(localStorage.getItem("viewHistory"));
    if(viewHistoryList){
        if(!viewHistoryList.vh_list.find( (i) => { return i===id}  )){
            viewHistoryList.vh_list.push(id);
            localStorage.setItem("viewHistory",JSON.stringify({'vh_list':viewHistoryList.vh_list}))
        }
    } else{
        localStorage.setItem("viewHistory",JSON.stringify({'vh_list': [id]}))
    }
    
}


//todo