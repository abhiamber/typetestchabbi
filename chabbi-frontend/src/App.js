import "./App.css";
import { Routes, Route } from "react-router-dom";
import Body from "./Components/Body";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Body />} />
      </Routes>
    </div>
  );
}

export default App;
