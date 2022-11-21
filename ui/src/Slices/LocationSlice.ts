import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { ILocation } from '../Interfaces/ILocation'

interface LocationState {
  loading: boolean,
  error: boolean,
  location?: ILocation
}

const initialLocationState: LocationState = {
  loading: false,
  error: false
}



export const locationSlice = createSlice({
  name: 'location',
  initialState: initialLocationState,
  reducers: {
    toggleError: (state) => {
      state.error = !state.error;
    },
    clearLocation: (state) => {
      state.location = undefined;
    }
  },
  extraReducers: (builder) => {
    //create board
    
  }
})

// Action creators are generated for each case reducer function
export const { toggleError, clearLocation } = locationSlice.actions

export default locationSlice.reducer