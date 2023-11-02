import React from "react";
const DashboardCard = ({
  imgSrc,
  content,
  count,
  alt,
  mainClass,
  subClass,
}) => {
  return (
    <div className="m-3">
      <div className={`box_outer ${mainClass}`}>
        <div className="col_img">
          <div className={`box_img ${subClass}`}>
            <img src={imgSrc} alt={alt || ""} />
          </div>
        </div>
        <div className="col_text">
          <p className="main_text">{content}</p>
          {count !== "" ? (
            <h3 className="mb-0">{count}</h3>
          ) : (
            <small>SP is awaited</small>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
