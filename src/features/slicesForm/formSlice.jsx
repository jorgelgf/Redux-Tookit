import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "forms",
  initialState: {
    value: "",
  },
  reducers: {
    formState: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { formState } = slice.actions;

// state - name do slice - value (usado para chamar no selector)
export const selectForm = (state) => state.forms.value;
export default slice.reducer;
