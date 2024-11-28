import { createSlice } from '@reduxjs/toolkit';

const savedGrouping = localStorage.getItem('grouping');

const initialState = {
    grouping: savedGrouping || "Status",
};


const gridSlice = createSlice({
    name: "groupingSlice",
    initialState,
    reducers: {
        setGrouping:(state,action)=>{
            state.grouping = action.payload;
            localStorage.setItem('grouping', action.payload);
        },
    },
});


export const {
    setGrouping,
} = gridSlice.actions;


export default gridSlice.reducer;