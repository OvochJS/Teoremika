import type { Problem } from "$/services/problemsService";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: { value: Problem } = {
  value: {
    id: -1,
    title: "",
    level: 1,
    description: "",
    markdown: "",
    topics: [],
    solution: 0,
  },
};

export const problemSlice = createSlice({
  name: "problem",
  initialState,

  reducers: {
    setProblem: (state, action: PayloadAction<Problem>) => {
      state.value = action.payload;
    },
  },
});

export const { setProblem } = problemSlice.actions;

export default problemSlice.reducer;
