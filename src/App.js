import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FormOne from "./Components/Redux/ALLFORMS/FormOne";
import FormTwo from "./Components/Redux/ALLFORMS/FormTwo";
import FormThree from "./Components/Redux/ALLFORMS/FormThree";
import Summary from "./Components/Redux/ALLFORMS/Summary";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Components/ExaltechSoftwares/Landing";

function App() {
  return (
    <div className="App" style={{ width: "100vw", height: "100%" }}>
      {/* <div style={{ width: "40vw", height: "100%" }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<FormOne />} />
            <Route path="/formtwo" element={<FormTwo />} />
            <Route path="/formthree" element={<FormThree />} />
            <Route path="/summary" element={<Summary />} />
          </Routes>
        </BrowserRouter>
      </div> */}
      <Landing/>
    </div>
  );
}

export default App;
