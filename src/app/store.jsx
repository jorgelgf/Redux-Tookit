import { configureStore } from "@reduxjs/toolkit";
import formReducer from "../features/slicesForm/formSlice";

export default configureStore({
  reducer: {
    forms: formReducer,
  },
});
