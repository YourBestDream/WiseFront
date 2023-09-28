import {configureStore} from '@reduxjs/toolkit';
import sideBarReducer from '../features/sideBarSlice';

export default configureStore({
    reducer: {
        sideBar: sideBarReducer
    }
})
