import "./App.css";
import { Routes, Route } from "react-router-dom";
import Body from "./Components/Body";
import CustomText from "./Components/CustomText";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="custom-text" element={<CustomText />} />
      </Routes>
    </div>
  );
}

export default App;
