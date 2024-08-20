import { createAction, Middleware } from "@reduxjs/toolkit"
import { ToolMessage } from "../types/message"
import { receiveData } from "../slices/crabeSlice"
import { Command } from "../types/command"

export const sendCommand = createAction<[number, Command]>("client/sendCommand")

export const clientMiddleware: Middleware = (store) => {
  const socket = new WebSocket("ws://localhost:10400")
  // Connection opened
  socket.addEventListener("open", event => {
    socket.send("Connection established")
  });
  socket.onmessage = (event) => {
    const toolMsg = JSON.parse(event.data) as ToolMessage
    store.dispatch(receiveData(toolMsg))
  }
  return (next) => (action) => {
    if (sendCommand.match(action)) {
      const [id, command] = action.payload;
      socket.send(JSON.stringify({ requestType: "commands", payload: [[id, command]] }))
    }

    next(action)
  }
}
