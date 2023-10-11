import axios from "axios"

import {ALL_PRODUCT_REQUEST,ALL_PRODUCT_SUCCESS, ALL_PRODUCT_FAIL,  PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL,
    NEW_REVIEW_REQUEST,NEW_REVIEW_SUCCESS,NEW_REVIEW_FAIL, CLEAR_ERRORS, ADMIN_PRODUCT_REQUEST, ADMIN_PRODUCT_SUCCESS, ADMIN_PRODUCT_FAIL,
    NEW_PRODUCT_REQUEST,NEW_PRODUCT_SUCCESS,NEW_PRODUCT_FAIL, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, DELETE_PRODUCT_FAIL, UPDATE_PRODUCT_REQUEST, UPDATE_PRODUCT_SUCCESS, UPDATE_PRODUCT_FAIL, ALL_REVIEW_REQUEST, ALL_REVIEW_SUCCESS, ALL_REVIEW_FAIL, DELETE_REVIEW_REQUEST, DELETE_REVIEW_SUCCESS, DELETE_REVIEW_FAIL,
} from "../constants/productConstant"
import backendLink from "../constants/backendLink"

export const getProducts = (keyword="",currentPage=1, price=[0,25000],category,ratings=0)=> async (dispatch) =>{
    try {
        dispatch({ type:ALL_PRODUCT_REQUEST })

        let link = `${backendLink}/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${ratings}`

        if(category){
            link=`${backendLink}/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&category=${category}&ratings[gte]=${ratings}`
        }
        const {data} = await axios.get(link);

        dispatch({
            type:ALL_PRODUCT_SUCCESS,
            payload:data
        })
    } catch (error) {
        dispatch({
            type:ALL_PRODUCT_FAIL,
            payload:error.response.data.message
        })
    }
}

export const getAdminProduct = ()=> async (dispatch) =>{
    try {
        dispatch({ type:ADMIN_PRODUCT_REQUEST })

        const config = {headers: { "Content-Type":"application/json","token":localStorage.getItem("token")}}
        const {data} = await axios.get(`${backendLink}/api/v1/admin/products`,config);

        dispatch({
            type:ADMIN_PRODUCT_SUCCESS,
            payload:data.products,
        })
    } catch (error) {
        dispatch({
            type:ADMIN_PRODUCT_FAIL,
            payload:error.response.data.message
        })
    }
}

export const createProduct = (productData)=> async (dispatch) =>{
    try {
        dispatch({ type:NEW_PRODUCT_REQUEST })

        
        const config = {headers: { "Content-Type":"application/json","token":localStorage.getItem("token")}}

        const {data} = await axios.post(`${backendLink}/api/v1/admin/product/new`,productData,config);
        dispatch({
            type:NEW_PRODUCT_SUCCESS, 
            payload:data
        })
    } catch (error) {
        dispatch({
            type:NEW_PRODUCT_FAIL,
            payload:error.response.data.message
        })
    }
}

export const updateProduct = (id,productData)=> async (dispatch) =>{
    try {
        dispatch({ type:UPDATE_PRODUCT_REQUEST })

        
        const config = {headers: { "Content-Type":"application/json","token":localStorage.getItem("token")}}

        const {data} = await axios.put(`${backendLink}/api/v1/admin/product/${id}`,productData,config);
        dispatch({
            type:UPDATE_PRODUCT_SUCCESS, 
            payload:data.success
        })
    } catch (error) {
        dispatch({
            type:UPDATE_PRODUCT_FAIL,
            payload:error.response.data.message
        })
    }
}

export const deleteProduct = (id)=> async (dispatch) =>{
    try {
        dispatch({ type:DELETE_PRODUCT_REQUEST })

        const config = {headers: { "Content-Type":"application/json","token":localStorage.getItem("token")}}
        const {data} = await axios.delete(`${backendLink}/api/v1/admin/product/${id}`,config);
        dispatch({
            type:DELETE_PRODUCT_SUCCESS, 
            payload:data.success
        })
    } catch (error) {
        dispatch({
            type:DELETE_PRODUCT_FAIL,
            payload:error.response.data.message
        })
    }
}

export const getProductDetails = (id)=> async (dispatch) =>{
    try {
        dispatch({ type:PRODUCT_DETAILS_REQUEST })

        const {data} = await axios.get(`${backendLink}/api/v1/product/${id}`);
        dispatch({
            type:PRODUCT_DETAILS_SUCCESS, 
            payload:data.product
        })
    } catch (error) {
        dispatch({
            type:PRODUCT_DETAILS_FAIL,
            payload:error.response.data.message
        })
    }
}

export const newReview = (reviewData)=> async (dispatch) =>{
    try {
        dispatch({ type:NEW_REVIEW_REQUEST })

        
        const config = {headers: { "Content-Type":"application/json","token":localStorage.getItem("token")}}

        const {data} = await axios.put(`${backendLink}/api/v1/review`,reviewData,config);
        dispatch({
            type:NEW_REVIEW_SUCCESS, 
            payload:data.success
        })
    } catch (error) {
        dispatch({
            type:NEW_REVIEW_FAIL,
            payload:error.response.data.message
        })
    }
}

// reviews backend usercontroller me h
export const getAllReviews = (id)=> async (dispatch) =>{
    try {
        dispatch({ type:ALL_REVIEW_REQUEST })

        const {data} = await axios.get(`${backendLink}/api/v1/reviews?productId=${id}`);
        dispatch({
            type:ALL_REVIEW_SUCCESS, 
            payload:data.reviews
        })
    } catch (error) {
        dispatch({
            type:ALL_REVIEW_FAIL,
            payload:error.response.data.message
        })
    }
}

export const deleteReviews = (reviewId,productId)=> async (dispatch) =>{
    try {
        dispatch({ type:DELETE_REVIEW_REQUEST })

        const config = {headers: { "Content-Type":"application/json","token":localStorage.getItem("token")}}
        const {data} = await axios.delete(`${backendLink}/api/v1/reviews?id=${reviewId}&productId=${productId}`,config);
        dispatch({
            type:DELETE_REVIEW_SUCCESS, 
            payload:data.success
        })
    } catch (error) {
        dispatch({
            type:DELETE_REVIEW_FAIL,
            payload:error.response.data.message
        })
    }
}

export const clearErrors = ()=> async (dispatch) =>{
    dispatch({ type:CLEAR_ERRORS})
}