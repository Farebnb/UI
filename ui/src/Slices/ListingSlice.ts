import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { IListing} from '../Interfaces/IListing'
import axios from 'axios'

interface ListingState {
  loading: boolean,
  error: boolean,
  listing?: IListing[],
  listingView: boolean,
  currentType?: string
}

const initialListingState: ListingState = {
  loading: false,
  error: false,
  listingView: false
}


export const getAllListings = createAsyncThunk(
    'listing/getall',
    async (thunkAPI) => {
        try{
            const res = await axios.get('http://localhost:8080/listing/all');
            console.log(res.data);
            return res.data;
        }catch(e){
            console.log(e);
        }
        }
    
)


export const listingSlice = createSlice({
  name: 'listing',
  initialState: initialListingState,
  reducers: {
    toggleError: (state) => {
      state.error = !state.error;
    },
    clearListing: (state) => {
      state.listing = undefined;
    },
    toggleListingView: (state) => {
      state.listingView = !state.listingView;
    },
    trueListingView: (state) => {
      state.listingView = true;
    },
    falseListingView: (state) => {
      state.listingView = false;
    },
    setHomeType: (state) => {
      state.currentType = "Home";
    },
    setHotelType: (state) => {
      state.currentType = "Hotel";
    },
    setCastleType: (state) => {
      state.currentType = "Castle";
    },
    setCottageType: (state) => {
      state.currentType = "Cottage";
    }
  },
  extraReducers: (builder) => {
    //create board
    builder.addCase(getAllListings.pending, (state, action)=>{
        state.loading = true;
    });
    builder.addCase(getAllListings.fulfilled, (state, action)=> {
        state.listing = action.payload;
        state.error = false;
        state.loading = false;
    });
    builder.addCase(getAllListings.rejected,(state,action)=> {
        state.error = true;
        state.loading = false;
    });
},
})

// Action creators are generated for each case reducer function
export const { toggleError, clearListing, toggleListingView, trueListingView, falseListingView, setHomeType, setHotelType, setCastleType, setCottageType } = listingSlice.actions

export default listingSlice.reducer