import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { IFavourite} from '../Interfaces/IFavourite'
import axios from 'axios'

interface FavouriteState {
  loading: boolean,
  error: boolean,
  favourites?: IFavourite[],
  
}

const initialFavouriteState: FavouriteState = {
  loading: false,
  error: false,
  
}

 
export const getByUserId = createAsyncThunk(
    'favourite/userid',
    async (userId:number, thunkAPI) => {
        try{
            const res = await axios.get(`http://localhost:8080/favourite/user?userId=${userId}`);
            console.log(res.data);
            return res.data;
        }catch(e){
            console.log(e);
        }
        }
    
)

export const getByListingId = createAsyncThunk(
    'favourite/listingid',
    async (listingId:number, thunkAPI) => {
        try{
            const res = await axios.get(`http://localhost:8080/favourite/listing?listingId=${listingId}`);
            console.log(res.data);
            return res.data;
        }catch(e){
            console.log(e);
        }
        }
    
)

export const createFavourite = createAsyncThunk(
    'favourite/listingid',
    async (fav:IFavourite, thunkAPI) => {
        try{
            const res = await axios.post(`http://localhost:8080/favourite/user?userId=${fav.userId}&listingId=${fav.listingId}`);
            console.log(res.data);
            return res.data;
        }catch(e){
            console.log(e);
        }
        }
    
)


export const favouriteSlice = createSlice({
  name: 'favourite',
  initialState: initialFavouriteState,
  reducers: {
    toggleError: (state) => {
      state.error = !state.error;
    },
    clearDate: (state) => {
      state.favourites = undefined;
    },

  },
  extraReducers: (builder) => {
    //create board
    builder.addCase(getByUserId.pending, (state, action)=>{
        state.loading = true;
    });
    builder.addCase(getByUserId.fulfilled, (state, action)=> {
        state.favourites = action.payload;
        state.error = false;
        state.loading = false;
    });
    builder.addCase(getByUserId.rejected,(state,action)=> {
        state.error = true;
        state.loading = false;
    });
    builder.addCase(getByListingId.pending, (state, action)=>{
        state.loading = true;
    });
    builder.addCase(getByListingId.fulfilled, (state, action)=> {
        state.favourites = action.payload;
        state.error = false;
        state.loading = false;
    });
    builder.addCase(getByListingId.rejected,(state,action)=> {
        state.error = true;
        state.loading = false;
    });
    builder.addCase(createFavourite.pending, (state, action)=>{
        state.loading = true;
    });
    builder.addCase(createFavourite.fulfilled, (state, action)=> {
        state.favourites = action.payload;
        state.error = false;
        state.loading = false;
    });
    builder.addCase(createFavourite.rejected,(state,action)=> {
        state.error = true;
        state.loading = false;
    });
},
})

// Action creators are generated for each case reducer function
export const { toggleError, clearDate } = favouriteSlice.actions

export default favouriteSlice.reducer