// import 

const { LOAD_PRODUCT, SUCC_PRODUCT, FAIL_PRODUCT, GET_PRODUCT } = require("../ActionsTypes/product");



// initState

const initState = {

    listProducts: [],
    error: null,
    load: false,
      // productToGet: //

};




// pure function
const productReducer = (state = initState, {type, payload } ) => { 
    switch (type) { 
    case LOAD_PRODUCT :
        return {... state, load: true};
    case SUCC_PRODUCT :
        return {...state, load: false, listProducts: payload.listProducts };
    case FAIL_PRODUCT:
        return {...state, load: false, error: payload };
    case GET_PRODUCT:
        return {...state, load: false, productToGet: payload.productToGet };   
        

      default:
          return state;
    }
};

export default productReducer;