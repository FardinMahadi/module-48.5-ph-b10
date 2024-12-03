import { Map } from "@vis.gl/react-google-maps";
import "./App.css";

function App() {
  return (
    <>
      <h1>React Google Map</h1>
      <Map
        style={{ width: "80vw", height: "100vh" }}
        defaultCenter={{ lat: 23.7189, lng: 90.3882 }}
        defaultZoom={15}
        gestureHandling={"greedy"}
        disableDefaultUI={true}
      />
    </>
  );
}

export default App;
