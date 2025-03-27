import "./App.css";
import MediaPlayerCustom from "./components/MediaPlayerCustom";

function App() {
  const SRC =
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
  const TITLE = "Big Buck Bunny";
  return (
    <>
      <MediaPlayerCustom src={SRC} title={TITLE} />
    </>
  );
}

export default App;
