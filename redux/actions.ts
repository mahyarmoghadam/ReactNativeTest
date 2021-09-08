import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk, Dispatch, PayloadAction } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { RandomNumberData } from "./randomNumberSlice";

const StorageKey = "randomNumberData";

export function randomRoll(sides = 10) {
  return Math.floor(Math.random() * sides);
}

export const usePersistRandomNumber = async (
  dispatch: Dispatch<any>,
  action: PayloadAction<RandomNumberData>
) => {
  try {
    debugger;
    const items = await loadStateRandomNumber();
    items.push(action.payload);
    const serialize = JSON.stringify(items);
    await AsyncStorage.setItem(StorageKey, serialize);

    dispatch(action);
  } catch {
  }
};

export async function loadStateRandomNumber(): Promise<
  Array<RandomNumberData>
> {
  try {
    const serializedState = await AsyncStorage.getItem(StorageKey);
    if (serializedState === null) {
      return [];
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return [];
  }
}

export async function removeState() {
  await AsyncStorage.removeItem(StorageKey);
}
