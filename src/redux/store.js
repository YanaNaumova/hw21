import { configureStore } from "@reduxjs/toolkit";
import questionnaire from "./slices/questionnaireSlice";

const store = configureStore({
  reducer: {
    questionnaire,
  },
});

export default store;
