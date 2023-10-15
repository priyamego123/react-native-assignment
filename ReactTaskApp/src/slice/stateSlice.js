import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isStateUpdate : false,
}

export const stateSlice = createSlice({
    name : 'stateUpdate',
    initialState,   
    reducers : {
        setStIsStateUpdate : ( state, action)=>{
            state.isStateUpdate = action.payload
        }   
       
    }
});

export const { setStIsStateUpdate , initializeStateUpdate} = stateSlice.actions;

export const selectIsStateUpdate = state => state.stateSlice.isStateUpdate;

export default stateSlice.reducer;