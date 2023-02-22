import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state): void => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
  },
});
export const { increment, decrement, incrementByAmount } = todoSlice.actions;
export const selectCount = (state: any) => state.counter.count;

export default todoSlice.reducer;
