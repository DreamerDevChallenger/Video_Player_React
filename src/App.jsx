import "./App.css";
import { VideoPlayer } from "./lib";
import videoMocks from "./__mocks__/video_mocks.mp4";

function App() {
  return (
    <div className="App">
      <VideoPlayer source={videoMocks} />
    </div>
  );
}

export default App;
