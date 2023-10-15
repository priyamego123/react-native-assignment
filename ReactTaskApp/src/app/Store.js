import { configureStore } from "@reduxjs/toolkit"; 
import stateSlice from '../slice/stateSlice';

export const store = configureStore({
    reducer : {
        stateSlice : stateSlice
        
    }
})