import "./App.css";
import Home from "./compenent/Home";
import Sidebar from "./compenent/Sidebar";
import "./assest/bootstrap-5.2.3-dist/css/bootstrap.min.css";
import "./assest/bootstrap-5.2.3-dist/js/bootstrap.min.js";
import { useState } from "react";

function App() {
  const [toggle, setToggle] = useState(true);
  const Toggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className="container-fluid bg-secondary min-vh-100">
      <div className="row">
        {toggle && (
          <div className="col-4 col-md-2 bg-white vh-100 position-fixed">
            <Sidebar />
          </div>
        )}
        {toggle && <div className="col-4 col-md-2"></div>}
        <div className="col">
          <Home Toggle={Toggle} />
        </div>
      </div>
    </div>
  );
}

export default App;
