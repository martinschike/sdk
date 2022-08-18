import React, { useState, useEffect } from "react";
import Categories from "./components/Categories";
import uninstalled from "./uninstalled.json";
import installed from "./installed.json";
import "./app.css";

const App = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    console.log("uninstalled ::::: ", uninstalled);
    console.log("installed ::::: ", installed);
  }, []);

  return (
    <div>
      <Categories data={categories} />
    </div>
  );
}

export default App;