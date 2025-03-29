import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import {MediaPlayerCustom }from "./MediaPlayerCustom";
import "@testing-library/jest-dom";

describe("MediaPlayerCustom", () => {
  const mockProps = {
    src: "test-video.mp4",
    currentTime: 0,
    activeEvents: [],
    onTimeUpdate: jest.fn(),
  };

  beforeEach(() => {
    window.HTMLMediaElement.prototype.play = jest.fn();
    window.HTMLMediaElement.prototype.pause = jest.fn();
  });

  it("renders video element with correct src", () => {
    render(<MediaPlayerCustom {...mockProps} />);
    const video = screen.getByTestId("video-player");
    expect(video).toBeInTheDocument();
    expect(video).toHaveAttribute("src", "test-video.mp4");
  });

  it("updates currentTime when prop changes", () => {
    const { rerender } = render(<MediaPlayerCustom {...mockProps} />);
    const video = screen.getByTestId("video-player") as HTMLVideoElement;

    // Мокаем currentTime
    Object.defineProperty(video, "currentTime", {
      writable: true,
      value: 0,
    });

    rerender(<MediaPlayerCustom {...mockProps} currentTime={10} />);
    expect(video.currentTime).toBe(10);
  });

  it("calls onTimeUpdate when time updates", () => {
    render(<MediaPlayerCustom {...mockProps} />);
    const video = screen.getByTestId("video-player");

    fireEvent.timeUpdate(video, { target: { currentTime: 5 } });
    expect(mockProps.onTimeUpdate).toHaveBeenCalledWith(5);
  });

  it("renders event markers correctly", () => {
    const events = [
      {
        id: "1",
        timestamp: 5,
        duration: 2,
        zone: { top: 10, left: 20, width: 30, height: 40 },
        formattedTime: "00:05:000",
      },
    ];

    render(<MediaPlayerCustom {...mockProps} activeEvents={events} />);
    const marker = screen.getByTestId("event-marker-1");
    expect(marker).toBeInTheDocument();
  });
});
