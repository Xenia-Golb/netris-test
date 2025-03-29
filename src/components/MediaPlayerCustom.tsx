import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";
import {
  MediaPlayer,
  MediaPlayerInstance,
  MediaProvider,
} from "@vidstack/react";
import {
  DefaultVideoLayout,
  defaultLayoutIcons,
} from "@vidstack/react/player/layouts/default";
import { useEffect, useRef } from "react";
import { FormattedEvent } from "../types/types";
import style from "./MediaPlayer.module.css";

interface MediaPlayerCustomProps {
  src: string;
  currentTime: number;
  activeEvents: FormattedEvent[];
  onTimeUpdate: (time: number) => void;
}

const MediaPlayerCustom: React.FC<MediaPlayerCustomProps> = ({
  src,
  currentTime,
  activeEvents,
  onTimeUpdate,
}) => {
  const playerRef = useRef<MediaPlayerInstance>(null);
  useEffect(() => {
    const player = playerRef.current;
    if (!player) return;

    player.currentTime = currentTime;

    const handleTimeUpdate = () => onTimeUpdate(player.currentTime);
    player.addEventListener("timeupdate", handleTimeUpdate);

    return () => player.removeEventListener("timeupdate", handleTimeUpdate);
  }, [onTimeUpdate]);

  return (
    <div>
      <MediaPlayer className={style.player} ref={playerRef} src={src}>
        <MediaProvider />
        <DefaultVideoLayout
          thumbnails="https://files.vidstack.io/sprite-fight/thumbnails.vtt"
          icons={defaultLayoutIcons}
        />
      </MediaPlayer>
      {activeEvents.map((event) => (
        <div
          key={event.id}
          className={style.rectangle}
          style={{
            top: `${event?.zone.top}px`,
            left: `${event?.zone.left}px`,
            width: `${event?.zone.width}px`,
            height: `${event?.zone.height}px`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default MediaPlayerCustom;
