import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MediaPlayerCustom } from "./index";
import { EventsList } from "./index";
import "@testing-library/jest-dom";

describe("MediaPlayer and EventsList Integration", () => {
  const mockEvents = [
    {
      id: "1",
      timestamp: 5,
      duration: 2,
      formattedTime: "00:05:000",
      zone: { top: 10, left: 20, width: 30, height: 40 },
    },
  ];

  it("updates player time when event is clicked", () => {
    let currentTime = 0;
    const handleTimeUpdate = jest.fn((time) => {
      currentTime = time;
    });
    const handleEventClick = (event: (typeof mockEvents)[0]) => {
      currentTime = event.timestamp;
    };

    render(
      <div>
        <MediaPlayerCustom
          src="test.mp4"
          currentTime={currentTime}
          activeEvents={mockEvents}
          onTimeUpdate={handleTimeUpdate}
        />
        <EventsList
          events={mockEvents}
          onEventClick={handleEventClick}
          currentTime={currentTime}
        />
      </div>
    );

    fireEvent.click(screen.getByText("00:05:000"));
    expect(currentTime).toBe(5);
  });
});
