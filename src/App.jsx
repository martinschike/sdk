import React from "react";
import Categories from "./components/Categories";
import installed from "./installed.json";
import uninstalled from "./uninstalled.json";
import "./app.css";


const App = () => {
  return (
    <div>
        <Categories />
    </div>
  )
}

export default App;