import {GET_SHOW_INFO_ERROR, GET_SHOW_INFO_SUCCESS, SEARCH_SERIES_ERROR, SEARCH_SERIES_SUCCESS} from "./actionTypes";
import axiosSeries from "../../axios-series";


const searchSeriesSuccess = series => ({type: SEARCH_SERIES_SUCCESS, series});
const searchSeriesError = () => ({type: SEARCH_SERIES_ERROR});

const getShowSuccess = show => ({type: GET_SHOW_INFO_SUCCESS, show});
const getShowError = () => ({type: GET_SHOW_INFO_ERROR});


export const searchSeries = (string) => {
    return async dispatch => {
        try{
            const res = await axiosSeries.get('search/shows?q=' + string);
            dispatch(searchSeriesSuccess(res.data));
        } catch(e){
            console.error('Something did wrong when you request series :(');
            dispatch(searchSeriesError());
        }
    };
};

export const getShowInf = (id) => {
    return async dispatch => {
        try {
            const res = await axiosSeries.get('shows/' + id);
            dispatch(getShowSuccess(res.data));
        } catch(e){
            console.error('Something did wrong when you request show :(');
            dispatch(getShowError());
        }
    }
};