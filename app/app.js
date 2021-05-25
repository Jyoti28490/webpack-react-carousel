// import "./styles/main.scss"
// import ProgressBar from "./components/ProgressBar"
// import { hot } from "react-hot-loader";
import React from "react";
import ReactDOM from "react-dom";
import "./styles/App.css";
import Maincontainer from "./components/Maincontainer";

function App() {
  return (
    <div className="App">
          <Maincontainer />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("app"))

if (module.hot) {
  module.hot.accept()
}
