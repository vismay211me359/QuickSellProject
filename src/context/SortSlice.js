import { createSlice } from '@reduxjs/toolkit';

const savedSort = localStorage.getItem('sortBy');

const initialState = {
    sortBy: savedSort || "Priority",
};


const gridSlice = createSlice({
    name: "sortSlice",
    initialState,
    reducers: {
        setSort:(state,action)=>{
            state.sortBy = action.payload;
            localStorage.setItem('sortBy', action.payload);
        },
    },
});


export const {
    setSort
} = gridSlice.actions;


export default gridSlice.reducer;