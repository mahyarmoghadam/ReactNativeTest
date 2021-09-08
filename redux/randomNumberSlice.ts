import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

export interface RandomNumberData {
  num1: number;
  num2: number;
  num3: number;
}

const initialState: RandomNumberData = { num1: 0, num2: 0, num3: 0 };

const randomNumberSlice = createSlice({
  name: "randomNumber",
  initialState: initialState,
  reducers: {
    SetNewNumber(state, action: PayloadAction<RandomNumberData>) {
      debugger;
      state.num1 = action.payload.num1;
      state.num2 = action.payload.num2;
      state.num3 = action.payload.num3;
    },
  },
});

export const { SetNewNumber } = randomNumberSlice.actions;
export default randomNumberSlice.reducer;
