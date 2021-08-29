import "./App.css";
import { BrowserRouter, Switch } from "react-router-dom";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Sidemenu from "./components2/sidemenu/Sidemenu";
import Mui_home from "./pages/Mui-home/Mui_home";
import Home from "./pages/home/Home";
import Employee from "./pages/forms/Employee";
import { useState } from "react";
import { CssBaseline } from "@material-ui/core";

function App() {
  const [view, setview] = useState("");
  // const [view, setview] = useState("normal");

  return (
    <div className="App">
      <BrowserRouter>
        {view === "normal" ? (
          <Switch>
            <>
              <Topbar />
              <div className="container">
                <div className="sidebarclass">
                  <Sidebar />
                </div>
                <div className="otherclass">
                  {/* <Home/> */}
                  <Employee />
                </div>
              </div>
            </>
          </Switch>
        ) : (
          <div>
            <Mui_home />
            <CssBaseline />
          </div>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
