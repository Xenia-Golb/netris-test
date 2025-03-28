import { RootState } from "../../types/types";

export const selectEvents = (state: RootState) => state.analytics.events;
export const selectLoading = (state: RootState) => state.analytics.loading;
export const selectError = (state: RootState) => state.analytics.error;
