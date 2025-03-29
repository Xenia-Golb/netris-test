import React from "react";
import { FormattedEvent } from "../types/types";
import style from "./EventList.module.css";

interface EventsListProps {
  events: FormattedEvent[];
  onEventClick: (event: FormattedEvent) => void;
  currentTime: number;
}

const EventsList: React.FC<EventsListProps> = ({
  events,
  onEventClick,
  currentTime,
}) => {
  const isEventActive = (event: FormattedEvent): boolean => {
    return (
      currentTime >= event.timestamp &&
      currentTime < event.timestamp + event.duration
    );
  };
  return (
    <div className="events-list">
      <h3>Events</h3>
      <ul>
        {events.map((event) => (
          <li
            key={event.id}
            onClick={() => onEventClick(event)}
            className={isEventActive(event) ? style["active"] : ""}
          >
            {event.formattedTime}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventsList;
