import { createSlice } from "@reduxjs/toolkit";





const initialState = {
    searchValue: '',
    sort: {
        name: 'popularity',
        sortProperty: 'rating',
    },
};

const sortSlice = createSlice({
    name: 'sort',
    initialState,
    reducers: {
        setSort(state, action) {
            state.sort = action.payload;
        },
        selectFilters(state, action) {
            state.sort = action.payload.sort;
        },
        setSearchValue(state, action) {
            state.searchValue = action.payload;
        }
    }
})

export const { setSort, selectFilters, setSearchValue } = sortSlice.actions;

export default sortSlice.reducer;