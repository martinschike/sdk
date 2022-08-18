import React, { useState, useEffect } from "react";
import Categories from "./components/Categories";
import uninstalled from "./uninstalled.json";
import installed from "./installed.json";
import "./app.css";

export default function App() {
  const [totalSDK, setTotalSDK] = useState([]);
  const [categories, setCategories] = useState([]);
  const [active, setActive] = useState("installedSdks");

  const categoryTypes = {
    installedSdks: installed,
    uninstalledSdks: uninstalled
  };

  useEffect(() => {
    // console.log("uninstalled ::::: ", uninstalled);
    activeCategory();
  }, []);

  const activeCategory = (type = "installedSdks") => {
    const sdkData = categoryTypes[type].data[type] || [];
    let sdkCategories = [];
    sdkCategories = sdkCategories.concat(...sdkData.map((c) => c.categories));
    const uniques = [];
    sdkCategories.forEach((s) => {
      if (!uniques.includes(s)) {
        uniques.push(s);
      }
    });
    setCategories(uniques);
    setActive(type);
    setTotalSDK(sdkCategories.length);
  };

  const getSDKs = (category, type = "installedSdks") => {
    const sdkData = categoryTypes[type].data[type] || [];
    return sdkData
      .filter((sdk) => sdk.categories.includes(category))
      .map(({ id, name, lastSeenDate, firstSeenDate }) => ({
        id,
        name,
        lastSeenDate,
        firstSeenDate
      }));
  };

  return (
    <>
    <div className="container">
      <Categories
        totalSDK={totalSDK}
        getSDKs={getSDKs}
        active={active}
        categories={categories}
        onCategoryTypeChange={activeCategory}
      />
    </div>
    </>
  );
}
