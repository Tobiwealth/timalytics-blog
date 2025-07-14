import {createSlice} from '@reduxjs/toolkit';

const searchSlice = createSlice({
	name: "search",
	initialState: {
		search: '',
	},
	reducers:{
		setSearch(state,action){
			const newSearch = action.payload;
            state.search = newSearch;
		}
	}
})

export const searchActions = searchSlice.actions;
export default searchSlice;