import { configureStore } from "@reduxjs/toolkit"; 
import productReducer from "./reducers/ProductReducer";

const store = configureStore({
  reducer: {
    // Add your reducers here
    products : productReducer
  },
  preloadedState:{
    // Add your initial state here if needed
  }
   
});

export default store;