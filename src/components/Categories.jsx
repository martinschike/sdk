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
      <div className="btn-container">
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
      </div>
      <div className="cover">
        <header>
          <h3>{active}</h3>
          <h3>{totalSDK}</h3>
        </header>
        <div className="set">
          {categories.map((c, i) => {
            const sdks = getSDKs(c, active);
            return (
              <div key={i}>
                <div className="content">
                  <h2 className="categories">{c} </h2>
                  <span>{sdks.length ? <SDKList sdks={sdks} /> : ""}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Categories;
