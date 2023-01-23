import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//add  a new user
export const AddUsers = createAsyncThunk(
  "user/AddUsers",
  async (newUser, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/api/users/", newUser);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

//get Data Users
export const GetDataUsers = createAsyncThunk(
  "user/GetDataUsers",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/api/users/");
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

//Delete a user
export const DeleteDataUsers = createAsyncThunk(
  "user/DeleteDataUsers",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/api/users/${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

//Update Data User
export const UpdateDataUsers = createAsyncThunk(
    "user/UpdateDataUsers",
    async (updatedUSer, { rejectWithValue }) => {
      try {
        const { data } = await axios.put(`/api/users/${updatedUSer._id}`,updatedUSer);
        return data;
      } catch (error) {
        return rejectWithValue(error.response.data.message);
      }
    }
  );

const UserSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
    users: [],
    isLoading: false,
    Errors: null,
  },

  reducers: {},

  extraReducers: {
    
    //AddUsers...........................
    [AddUsers.pending]: (state) => {
      state.isLoading = true;
    },
    [AddUsers.fulfilled]: (state, { type, payload }) => {
      state.isLoading = false;
      state.user = payload;
    },
    [AddUsers.rejected]: (state, { type, payload }) => {
      state.Errors = payload;
    },
    
    
    //GetDataUsers.........................
    [GetDataUsers.pending]: (state) => {
      state.isLoading = true;
    },
    [GetDataUsers.fulfilled]: (state, { type, payload }) => {
      state.isLoading = false;
      state.users = payload;
    },
    [GetDataUsers.rejected]: (state, { type, payload }) => {
      state.Errors = payload;
    },
    
    
    //DeleteDataUsers........................
    [DeleteDataUsers.pending]: (state) => {
      state.isLoading = true;
    },
    [DeleteDataUsers.fulfilled]: (state, { type, payload }) => {
      state.isLoading = false;
      const deleted = state.users.filter(
        (user) => user._id !== payload.DeletedUser._id
      );
      state.users = deleted;
    },
    [DeleteDataUsers.rejected]: (state, { type, payload }) => {
      state.Errors = payload;
    },
    
    
    //UpdateDataUsers........................
    [UpdateDataUsers.pending]: (state) => {
        state.isLoading = true;
      },
      [UpdateDataUsers.fulfilled]: (state, { type, payload }) => {
        state.isLoading = false;
        state.users = state.users.map(user=> (user._id === payload._id)? {...user,...payload} : user)
      },
      [UpdateDataUsers.rejected]: (state, { type, payload }) => {
        state.Errors = payload;
      }
  },
});

export default UserSlice.reducer;
