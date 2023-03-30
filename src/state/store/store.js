import userInfoReducer from '../reducers/songreducer'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
    reducer: {userInfoReducer}
});

