import React from "react";
import SDKList from "./SDKList";

const Categories = ({
  getSDKs,
  active,
  categories,
  onCategoryTypeChange,
  totalSDK
}) => {
  return (
    <div>
      <button
        style={active === "installedSdks" ? { backgroundColor: "white" } : {}}
        onClick={() => onCategoryTypeChange("installedSdks")}
        className="btn"
      >
        Installed
      </button>
      <button
        style={active === "uninstalledSdks" ? { backgroundColor: "white" } : {}}
        onClick={() => onCategoryTypeChange("uninstalledSdks")}
        className="btn"
      >
        UnInstalled
      </button>
      <header>
        <h3>{active}</h3>
        <h3>{totalSDK}</h3>
      </header>
      {categories.map((c, i) => {
        const sdks = getSDKs(c, active);
        return (
          <div key={i} className="cat">
            <h2 className="categories">{c} </h2>
            {sdks.length ? <SDKList sdks={sdks} /> : ""}
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
