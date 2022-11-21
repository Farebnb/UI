import listingReducer from './Slices/ListingSlice'
import locationReducer from './Slices/LocationSlice'
import userReducer from './Slices/UserSlice'
import {configureStore} from '@reduxjs/toolkit'

const reducer = {
    listing: listingReducer,
    location: locationReducer,
    user: userReducer
}

export const store = configureStore({reducer})

export function getStoreWithState(preloadedState? : RootState){
    return configureStore({reducer,preloadedState})
}


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;