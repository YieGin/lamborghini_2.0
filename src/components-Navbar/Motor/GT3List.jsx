import React from "react";
import "./Styles/GT3List.css";
const GT3List = ({ GtList }) => {
  return (
    <div>
      {GtList.map((ListGt3) => (
        <ul className="Page-6-GT3">
          <div className="Page-6-GT3-Left">
            <li>{ListGt3[0]}</li>
            <li>{ListGt3[1]}</li>
          </div>
          <div className="Page-6-GT3-Right">
            <li>{ListGt3[2]}</li>
            <p>{ListGt3[3]}</p>
          </div>
        </ul>
      ))}
    </div>
  );
};

export default GT3List;
