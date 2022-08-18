import React from "react";

const Categories = ({ data }) => {
  return (
    <div>
      {data.map((dataItem) => {
        return (
          <div key={dataItem.id}>
            <p>{dataItem.categories}</p>
            console.log(dataItem)
          </div>
        );
      })}
    </div>
  );
};

export default Categories;