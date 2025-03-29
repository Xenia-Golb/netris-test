import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { EventsList } from "./EventsList";
import "@testing-library/jest-dom";

describe("EventsList", () => {
  const mockEvents = [
    {
      id: "1",
      timestamp: 5,
      duration: 2,
      formattedTime: "00:05:000",
      zone: { top: 0, left: 0, width: 0, height: 0 },
    },
    {
      id: "2",
      timestamp: 10,
      duration: 3,
      formattedTime: "00:10:000",
      zone: { top: 0, left: 0, width: 0, height: 0 },
    },
  ];

  const mockOnClick = jest.fn();

  it("renders list of events", () => {
    render(
      <EventsList
        events={mockEvents}
        onEventClick={mockOnClick}
        currentTime={0}
      />
    );

    expect(screen.getByText("00:05:000")).toBeInTheDocument();
    expect(screen.getByText("00:10:000")).toBeInTheDocument();
  });

  it("highlights active event", () => {
    render(
      <EventsList
        events={mockEvents}
        onEventClick={mockOnClick}
        currentTime={5.5}
      />
    );

    const activeItem = screen.getByText("00:05:000").closest("li");
    expect(activeItem).toHaveClass("active");
  });

  it("calls onEventClick with correct event when clicked", () => {
    render(
      <EventsList
        events={mockEvents}
        onEventClick={mockOnClick}
        currentTime={0}
      />
    );

    fireEvent.click(screen.getByText("00:10:000"));
    expect(mockOnClick).toHaveBeenCalledWith(mockEvents[1]);
  });

  it("does not highlight events when not active", () => {
    render(
      <EventsList
        events={mockEvents}
        onEventClick={mockOnClick}
        currentTime={15}
      />
    );

    const items = screen.getAllByRole("listitem");
    items.forEach((item) => {
      expect(item).not.toHaveClass("active-event");
    });
  });
});
