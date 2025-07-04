
import Details from "./Components/Details";
import Home from "./Components/Home";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="h-screen w-screen flex">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/details/:value" element={<Details/>}/>
      </Routes>
    </div>
  );
}

export default App;
