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
      >
        Installed
      </button>
      <button
        style={active === "uninstalledSdks" ? { backgroundColor: "white" } : {}}
        onClick={() => onCategoryTypeChange("uninstalledSdks")}
      >
        UnInstalled
      </button>
      <h1>Categories goes here Total {totalSDK}</h1>
      {categories.map((c, i) => {
        const sdks = getSDKs(c, active);
        return (
          <div key={i}>
            <h2>{c} </h2>
            {sdks.length ? <SDKList sdks={sdks} /> : ""}
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
