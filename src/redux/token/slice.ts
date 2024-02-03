import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  token: string | null;
};

const initialState: InitialState = {
  token: localStorage.getItem("cardToken") || null,
};

const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
      localStorage.cardToken = state.token;
    },
    clearToken(state) {
      state.token = null;
      localStorage.removeItem("cardToken");
    },
  },
});

export const { setToken, clearToken } = tokenSlice.actions;
export default tokenSlice.reducer;
