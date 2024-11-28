import { configureStore } from '@reduxjs/toolkit';
import groupingReducer from "../context/GroupingSlice";
import sortingReducer from "../context/SortSlice";


const store = configureStore({
    reducer: {
        grouping:groupingReducer,
        sorting:sortingReducer,
    },
});

export default store;