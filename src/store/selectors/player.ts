import { RootState } from "../../types/types";

export const selectCurrentTime = (state: RootState) => state.player.currentTime;
export const selectIsPlaying = (state: RootState) => state.player.isPlaying;
export const selectCurrentEvent = (state: RootState) =>
  state.player.currentEvent;
export const selectShowRectangle = (state: RootState) =>
  state.player.showRectangle;
