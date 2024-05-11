import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getHomeGoodPriceData, getHomeHighScoreData, getHomeDiscountData, getHomeWonderfulPlaceData } from '@/services'

export const fetchHomeDataAciton = createAsyncThunk("home/fetchData", (payload, { dispatch }) => {
  getHomeHighScoreData().then(res => dispatch(setHighScoreAction(res)))
  getHomeGoodPriceData().then(res => dispatch(setGoodPriceAction(res)))
  getHomeDiscountData().then(res => dispatch(setDiscountAction(res)))
  getHomeWonderfulPlaceData().then(res => dispatch(setWonderfulPlace(res)))
})
const homeSlice = createSlice({
  name: "home",
  initialState: {
    highScore: {},
    goodPrice: {},
    discount: {},
    wonderfulPlace: {}
  },
  reducers: {
    setHighScoreAction(state, { payload }) {
      state.highScore = payload
    },
    setGoodPriceAction(state, { payload }) {
      state.goodPrice = payload
    },
    setDiscountAction(state, { payload }) {
      state.discount = payload
    },
    setWonderfulPlace(state, { payload }) {
      state.wonderfulPlace = payload
    }
  }
})

export const { setHighScoreAction, setGoodPriceAction, setDiscountAction, setWonderfulPlace } = homeSlice.actions

export default homeSlice.reducer