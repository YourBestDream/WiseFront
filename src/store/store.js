import {configureStore} from '@reduxjs/toolkit';
import sideBarReducer from '../features/sideBarSlice';
import searchReducer from '../features/searchSlice';

export default configureStore({
    reducer: {
        sideBar: sideBarReducer,
        search: searchReducer,
    }
})
