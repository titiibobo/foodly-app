import { SEARCH_ITEM , GET_ALLERGENS, POST_PRODUCT, SET_LOADING, GET_ADDITIVES } from '../types';

export default (state, action) => {
    switch (action.type) {
        case GET_ALLERGENS:
            return {
                ...state,
                allergens: action.payload,
                loading: false,
            };
        case SEARCH_ITEM :
            return {
                ...state,
                item: action.payload,
                loading: false,
            };
        case GET_ADDITIVES:
            return {
                ...state,
                additives: action.payload,
                loading: false,
            };
        case POST_PRODUCT:
            return {
                ...state,
                product: action.payload,
                loading: false,
            };
        case SET_LOADING:
            return {
                ...state,
                loading: action.payload,
            };
        default:
            return state;
    }
};
