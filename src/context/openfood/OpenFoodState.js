import { USER_ID, PASSWORD } from '@env';
import React, { useReducer } from 'react';
import axios from 'axios';
import OpenFoodContext from './openfoodContext';
import OpenFoodReducer from './openfoodReducer';
import {GET_ALLERGENS, SEARCH_ITEM ,  GET_ADDITIVES, POST_PRODUCT, SET_LOADING } from '../types';

const OpenFoodState = props => {
    const initialState = {
        item: null,
        allergens: [],
        additives: [],
        product: [],
        loading: false,
    };

    const [state, dispatch] = useReducer(OpenFoodReducer, initialState);

    // Search single item
    const searchItem = async (index) => {
        setLoading(true);

        const res = await axios.get(
            `https://world.openfoodfacts.org/api/v2/search?code=${index}&fields=id,product_name,brands,nutrient_levels,nutriments,nova_group,nutriscore_grade,creator,data_sources,image_url`
        );
        dispatch({
            type: SEARCH_ITEM,
            payload: res.data.products[0]
        });
        setLoading(false);
    };
    
    // Get Allergens
    const getAllergens = async () => {
        setLoading(true);

        const res = await axios.get(
            `https://world.openfoodfacts.org/allergens.json`
        );
        dispatch({
            type: GET_ALLERGENS,
            payload: res.data.tags
        });

        setLoading(false);
    };
    // Get Additives
    const getAdditives = async () => {
        setLoading(true);

        const res = await axios.get(
            `https://world.openfoodfacts.org/additives.json`
        );
        dispatch({
            type: GET_ADDITIVES,
            payload: res.data.tags
        });

        setLoading(false);
    };

    // Post Product
    const postProduct = async () => {
        setLoading(true);

        const res = await axios.post(
            `https://us.openfoodfacts.org/cgi/product_jqm2.pl?code=${code}&user_id=elmahnuel&password=22344566&brands=${brand}&labels=${label}`
        );
        console.log(res.data.product);
        dispatch({
            type: POST_PRODUCT,
            payload: res.data.products,
        });

        setLoading(false);
    };

    // Set Loading
    const setLoading = payload => dispatch({
         type: SET_LOADING, 
         payload 
        });

    return (
        <OpenFoodContext.Provider
            value={{
                allergens: state.allergens,
                item: state.item,
                additives: state.additives,
                product:state.product,
                loading: state.loading,
                getAllergens,
                getAdditives,
                searchItem,
                postProduct
            }}>
            {props.children}
        </OpenFoodContext.Provider>
    );
};

export default OpenFoodState;


