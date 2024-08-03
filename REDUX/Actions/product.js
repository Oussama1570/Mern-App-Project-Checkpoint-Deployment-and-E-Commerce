import axios from "axios";
import { LOAD_PRODUCT, SUCC_PRODUCT } from "./ActionsTypes/product";
import { FAIL_PRODUCT, GET_PRODUCT } from "../ActionsTypes/product";


// get all product :
export const getProducts = () => async (dispatch) => {
     dispatch ({ type: LOAD_PRODUCT}) ;
     try { 
        let result = await axios.get("/api/product/getall");
        dispatch({ type: SUCC_PRODUCT, payload: result.data });
     } catch (error)  {
        dispatch({type: FAIL_PRODUCT, payload: error.response})

     }
};

// add product :
export const addProduct = (newProduct) => async (dispatch) => {
 try { 
    
    const config = {
    headers : { 
          authorization : LocalStorage.getItem("token")
    }
}

     await axios.post("/api/product/add", newProduct, config);
          dispatch(getProducts());

 } catch (error) {
          dispatch({ type: FAIL_PRODUCT, payload: error.response });
 }
};


// delete product :
export const deleteProduct = () => async (dispatch) => { 
    try {  
        await axios.delete(`/api/product/${id}`);
        dispatch(getProducts());
        
    } catch (error) { 
        dispatch({ type: FAIL_PRODUCT, payload: error.response });

    }
};


// edit product :
export const editProduct = (id, newProduct) => async (dispatch) => { 

    try { 
        await axios.put(`/api/product/${id}`, newProduct);
        dispatch(getProducts());
    }   catch (error) {
            dispatch({type : FAIL_PRODUCT, payload: error.response });

    }
};


export const getProduct = (id) => async (dispatch) => { 
     dispatch({type: LOAD_PRODUCT})
 try {
    let result = await axios.get(`/api/product/${id}` );
    dispatch ({ type: GET_PRODUCT, payload: result.data }); 
 } catch (error) {}

 };



