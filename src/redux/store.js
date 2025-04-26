import { configureStore } from "@reduxjs/toolkit";
import UserReducer from './UserSlice';

const store = configureStore({
    devTools : true,
    reducer : {
        Users : UserReducer,
    }
});
export default store