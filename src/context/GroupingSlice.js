import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    grouping:"Status",
};


const gridSlice = createSlice({
    name: "groupingSlice",
    initialState,
    reducers: {
        setGrouping:(state,action)=>{
            state.grouping=action.payload;
        },
    },
});


export const {
    setGrouping,
} = gridSlice.actions;


export default gridSlice.reducer;