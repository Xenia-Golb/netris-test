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
  const playerRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const player = playerRef.current;
    if (!player) return;
    if (Math.abs(player.currentTime - currentTime) > 0.2) {
      player.currentTime = currentTime;
    }
  }, [currentTime]);

  useEffect(() => {
    const player = playerRef.current;
    if (!player) return;

    const handleTimeUpdate = () => {
      if (player.currentTime !== undefined) {
        onTimeUpdate(player.currentTime);
      }
    };

    player.addEventListener("timeupdate", handleTimeUpdate);
    return () => {
      player.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, [onTimeUpdate]);

  return (
    <div className={style.container}>
      <video className={style.player} ref={playerRef} src={src} controls />
      {activeEvents.map((event) => (
        <div
          key={event.id}
          className={style.rectangle}
          style={{
            top: `${event.zone?.top ?? 0}px`,
            left: `${event.zone?.left ?? 0}px`,
            width: `${event.zone?.width ?? 0}px`,
            height: `${event.zone?.height ?? 0}px`,
          }}
        />
      ))}
    </div>
  );
};

export default MediaPlayerCustom;
