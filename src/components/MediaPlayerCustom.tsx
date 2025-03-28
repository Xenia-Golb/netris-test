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

interface MediaPlayerCustomProps {
  src: string;
  currentTime: number;
  currentEvent: FormattedEvent | null;
  showRectangle: boolean;
  onTimeUpdate: (time: number) => void;
  onPlayPause: () => void;
  isPlaying: boolean;
}

const MediaPlayerCustom: React.FC<MediaPlayerCustomProps> = ({
  src,
  currentTime,
  currentEvent,
  showRectangle,
  onTimeUpdate,
  onPlayPause,
  isPlaying,
}) => {
  const playerRef = useRef<MediaPlayerInstance>(null);
  useEffect(() => {
    if (playerRef.current) {
      const player = playerRef.current;
      player.addEventListener("timeupdate", () => {
        onTimeUpdate(player.currentTime);
      });

      return () => {
        player.removeEventListener("timeupdate", () => {
          onTimeUpdate(player.currentTime);
        });
      };
    }
  }, [onTimeUpdate]);

  useEffect(() => {
    if (playerRef.current) {
      if (isPlaying) {
        playerRef.current.play();
      } else {
        playerRef.current.pause();
      }
    }
  }, [isPlaying]);
  return (
    <div>
      <MediaPlayer ref={playerRef} src={src}>
        <MediaProvider />
        <DefaultVideoLayout icons={defaultLayoutIcons} />
      </MediaPlayer>

      {showRectangle && <div className="rectangle"></div>}
    </div>
  );
};

export default MediaPlayerCustom;
