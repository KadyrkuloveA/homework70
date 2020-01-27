import {
    GET_SHOW_INFO_ERROR,
    GET_SHOW_INFO_SUCCESS,
    SEARCH_SERIES_ERROR,
    SEARCH_SERIES_SUCCESS
} from "../actions/actionTypes";

const initialState = {
    series: {},
    show: {}
};

const seriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_SERIES_SUCCESS:
            return {...state, series: action.series};
        case SEARCH_SERIES_ERROR:
            return {...state};
        case GET_SHOW_INFO_SUCCESS:
            return {...state,
                show: {
                    name: action.show.name,
                    image : action.show.image.original,
                    summary : action.show.summary.replace(/(\<(\/?[^>]+)>)/g, ''),
                    rating: action.show.rating.average,
                    runtime: action.show.runtime
                }};
        case GET_SHOW_INFO_ERROR:
            return {...state};
        default:
            return state
    }
};

export default seriesReducer;