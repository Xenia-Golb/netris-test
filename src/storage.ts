import { FormattedEvent } from "./types/types";

export const saveEventsToLocalStorage = (events: FormattedEvent[]) => {
  localStorage.setItem("events", JSON.stringify(events));
};

export const getEventsFromLocalStorage = (): FormattedEvent[] | null => {
  const events = localStorage.getItem("events");
  return events ? JSON.parse(events) : null;
};
