import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface User {
  userName: string;
  score: number;
}

const initialState: { value: User | null } = {
  value: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.value = action.payload;
    },
    setScore: (state, action: PayloadAction<number>) => {
      if (state.value) state.value.score += action.payload;
    },
  },
});

export const { setUser,setScore } = userSlice.actions;

export default userSlice.reducer;
