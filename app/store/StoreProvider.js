'use client'
import Store from './index'
import {Provider} from 'react-redux';

export const StoreProvider = ({children}) => {
	return <Provider store={Store}>{children}</Provider>
}