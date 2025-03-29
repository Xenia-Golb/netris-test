import React from "react";
import { FormattedEvent } from "../types/types";
import "./EventList.css";

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
  return (
    <div className="events-list">
      <h3>Events</h3>
      <ul>
        {events.map((event) => (
          <li
            key={event.id}
            onClick={() => onEventClick(event)}
            className={
              currentTime >= event.timestamp &&
              currentTime <= event.timestamp + event.duration
                ? "active"
                : ""
            }
          >
            {event.formattedTime}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventsList;
