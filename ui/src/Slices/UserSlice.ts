import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { IUser } from '../Interfaces/IUser'

interface UserState {
  loading: boolean,
  error: boolean,
  user?: IUser
}

const initialUserState: UserState = {
  loading: false,
  error: false
}



export const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    toggleError: (state) => {
      state.error = !state.error;
    },
    clearUser: (state) => {
      state.user = undefined;
    }
  },
  extraReducers: (builder) => {
    //create board
    
  }
})

// Action creators are generated for each case reducer function
export const { toggleError, clearUser } = userSlice.actions

export default userSlice.reducer