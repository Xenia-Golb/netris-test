import { AnalyticsEvent } from "./types/types";

const STORAGE_KEY = "video-analytics-events";

export function saveEventsToStorage(events: AnalyticsEvent[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(events));
}

export function loadEventsFromStorage(): AnalyticsEvent[] | null {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : null;
}
