import "./App.css";
import { VideoPlayerComponent } from "./lib";
import videoMocks from "./__mocks__/video_mocks.mp4";
import videoPreview from "./__mocks__/video_preview.webp";

const App = () => {
  return (
    <div className="App">
      <VideoPlayerComponent source={videoMocks} preview={videoPreview} />
    </div>
  );
};

export default App;
