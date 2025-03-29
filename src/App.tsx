import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MediaPlayerCustom from "./components/MediaPlayerCustom";
import EventsList from "./components/EventsList";
import { fetchEventsRequest } from "./store/actions/analyticsActions";
import {
  selectEvents,
  selectLoading,
  selectError,
} from "./store/selectors/analytics";
import {
  selectCurrentTime,
  selectActiveEvents,
} from "./store/selectors/player";
import { setCurrentTime, setCurrentEvent } from "./store/actions/playerActions";
import { FormattedEvent } from "./types/types";

import "./App.css";

const VIDEO_URL =
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const events = useSelector(selectEvents);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const currentTime = useSelector(selectCurrentTime);
  const activeEvents = useSelector(selectActiveEvents);

  useEffect(() => {
    dispatch(fetchEventsRequest());
  }, [dispatch]);

  const handleEventClick = (event: FormattedEvent) => {
    dispatch(setCurrentTime(event.timestamp));
    dispatch(setCurrentEvent(event));
  };

  const handleTimeUpdate = (time: number) => {
    dispatch(setCurrentTime(time));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="app">
      <h1>Video Analytics Player</h1>
      <div className="player-container">
        <MediaPlayerCustom
          src={VIDEO_URL}
          currentTime={currentTime}
          activeEvents={activeEvents}
          onTimeUpdate={handleTimeUpdate}
        />
        <EventsList
          events={events}
          onEventClick={handleEventClick}
          currentTime={currentTime}
        />
      </div>
    </div>
  );
};

export default App;
