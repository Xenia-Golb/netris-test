import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";

import { MediaPlayer, MediaProvider } from "@vidstack/react";
import {
  defaultLayoutIcons,
  DefaultVideoLayout,
} from "@vidstack/react/player/layouts/default";
type MediaPlayer = {
  src: string;
  title: string;
};
function MediaPlayerCustom({ src, title }: MediaPlayer) {
  return (
    <MediaPlayer title={title} src={src}>
      <MediaProvider />
      <DefaultVideoLayout
        thumbnails="https://files.vidstack.io/sprite-fight/thumbnails.vtt"
        icons={defaultLayoutIcons}
      />
    </MediaPlayer>
  );
}

export default MediaPlayerCustom;
