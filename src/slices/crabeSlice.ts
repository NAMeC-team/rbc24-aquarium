import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ToolMessage } from "../types/message"
import { convertArrayToObject, parseWorld } from "../helpers/parser"
import { CrabeState } from "../types/state"
export const crabeSlice = createSlice({
  name: "crabe",
  initialState: {} as CrabeState,
  reducers: {
    receiveData(state, action: PayloadAction<ToolMessage>) {
      console.log(action.payload.world)
      return {
        world: parseWorld(action.payload.world),
        annotations: convertArrayToObject(action.payload.data.annotations),
      }
    },
  },
})

export const { receiveData } = crabeSlice.actions

export default crabeSlice.reducer
