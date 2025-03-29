import { RootState } from "../../types/types";

export const selectCurrentTime = (state: RootState) => state.player.currentTime;
export const selectCurrentEvent = (state: RootState) =>
  state.player.currentEvent;
export const selectActiveEvents = (state: RootState) =>
  state.player.activeEvents;
