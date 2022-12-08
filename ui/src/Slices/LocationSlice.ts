import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { ILocation } from '../Interfaces/ILocation'

interface LocationState {
  loading: boolean,
  error: boolean,
  location?: ILocation,
  locationList?: ILocation[]
}

const initialLocationState: LocationState = {
  loading: false,
  error: false
}

export const getLocationById = createAsyncThunk(
  'location/getById',
  async (id:number,thunkAPI) => {
      try{
          const res = await axios.get(`http://localhost:8081/location/?id=${id}`);
          console.log(res.data);
          return res.data;
      }catch(e){
          console.log(e);
      }
      }
  
)

export const getAllLocations = createAsyncThunk(
  'location/all',
  async (thunkAPI) => {
      try{
          const res = await axios.get(`http://localhost:8081/location/all`);
          console.log(res.data);
          return res.data;
      }catch(e){
          console.log(e);
      }
      }
  
)

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
    builder.addCase(getLocationById.pending, (state, action)=>{
      state.loading = true;
  });
  builder.addCase(getLocationById.fulfilled, (state, action)=> {
      state.location = action.payload;
      state.error = false;
      state.loading = false;
  });
  builder.addCase(getLocationById.rejected,(state,action)=> {
      state.error = true;
      state.loading = false;
  });

  builder.addCase(getAllLocations.pending, (state, action)=>{
    state.loading = true;
});
builder.addCase(getAllLocations.fulfilled, (state, action)=> {
    state.locationList = action.payload;
    state.error = false;
    state.loading = false;
});
builder.addCase(getAllLocations.rejected,(state,action)=> {
    state.error = true;
    state.loading = false;
});
    
  }
})

// Action creators are generated for each case reducer function
export const { toggleError, clearLocation } = locationSlice.actions

export default locationSlice.reducer