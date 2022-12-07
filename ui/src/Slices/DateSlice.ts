import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { IDate} from '../Interfaces/IDate'
import axios from 'axios'

interface DateState {
  loading: boolean,
  error: boolean,
  dateList?: IDate[],
  date?: IDate,
  
}

const initialDateState: DateState = {
  loading: false,
  error: false,
  
}


export const getByDate = createAsyncThunk(
    'date/get',
    async (date:string, thunkAPI) => {
        try{
            const res = await axios.get(`http://localhost:8080/date/?date=${date}`);
            console.log(res.data);
            return res.data;
        }catch(e){
            console.log(e);
        }
        }
    
)

export const bookDate = createAsyncThunk(
    'date/book',
    async (date:IDate, thunkAPI) => {
        try{
            const res = await axios.post('http://localhost:8080/date/',date);
            console.log(res.data);
            return res.data;
        }catch(e){
            console.log(e);
        }
        }
    
)


export const dateSlice = createSlice({
  name: 'date',
  initialState: initialDateState,
  reducers: {
    toggleError: (state) => {
      state.error = !state.error;
    },
    clearDate: (state) => {
      state.date = undefined;
    },

  },
  extraReducers: (builder) => {
    //create board
    builder.addCase(getByDate.pending, (state, action)=>{
        state.loading = true;
    });
    builder.addCase(getByDate.fulfilled, (state, action)=> {
        state.date = action.payload;
        state.error = false;
        state.loading = false;
    });
    builder.addCase(getByDate.rejected,(state,action)=> {
        state.error = true;
        state.loading = false;
    });
},
})

// Action creators are generated for each case reducer function
export const { toggleError, clearDate } = dateSlice.actions

export default dateSlice.reducer