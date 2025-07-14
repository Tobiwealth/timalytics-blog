import {configureStore} from '@reduxjs/toolkit';
import searchSlice from './searchSlice';

const Store = configureStore({
	reducer:{
		search: searchSlice.reducer
	}
});
export default Store;