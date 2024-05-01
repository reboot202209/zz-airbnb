import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
  name: "home",
  initialState: {
    count: 0
  },
  reducers: {
    addNum(state, { payload }) {
      state.count += payload
    }
  }
})

export const { addNum } = homeSlice.actions

export default homeSlice.reducer