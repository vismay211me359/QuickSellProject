import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    sortBy:"Priority",
};


const gridSlice = createSlice({
    name: "sortSlice",
    initialState,
    reducers: {
        setSort:(state,action)=>{
            state.sortBy=action.payload;
        },
    },
});


export const {
    setSort
} = gridSlice.actions;


export default gridSlice.reducer;