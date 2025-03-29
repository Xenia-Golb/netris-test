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
  currentEvent: FormattedEvent | null;
  showRectangle: boolean;
  onTimeUpdate: (time: number) => void;
  handlePlay: () => void;
  handlePause: () => void;
}

const MediaPlayerCustom: React.FC<MediaPlayerCustomProps> = ({
  src,
  currentTime,
  currentEvent,
  showRectangle,
  onTimeUpdate,
  handlePlay,
  handlePause,
}) => {
  const playerRef = useRef<MediaPlayerInstance>(null);
  useEffect(() => {
    if (playerRef.current) {
      const player = playerRef.current;
      const handleTimeUpdate = () => {
        onTimeUpdate(player.currentTime);
      };

      player.addEventListener("timeupdate", handleTimeUpdate);

      return () => {
        player.removeEventListener("timeupdate", handleTimeUpdate);
      };
    }
  }, [onTimeUpdate]);
  return (
    <div>
      <MediaPlayer
        className={style.player}
        ref={playerRef}
        src={src}
        onPlay={handlePlay}
        onPause={handlePause}
      >
        <MediaProvider />
        <DefaultVideoLayout
          thumbnails="https://files.vidstack.io/sprite-fight/thumbnails.vtt"
          icons={defaultLayoutIcons}
        />
      </MediaPlayer>
      {showRectangle && (
        <div
          className={style.rectangle}
          style={{
            top: `${currentEvent?.zone.top}px`,
            left: `${currentEvent?.zone.left}px`,
            width: `${currentEvent?.zone.width}px`,
            height: `${currentEvent?.zone.height}px`,
          }}
        ></div>
      )}
    </div>
  );
};

export default MediaPlayerCustom;
