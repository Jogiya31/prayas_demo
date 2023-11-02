import React from "react";

const SchemeGranularityCard = ({ content, count, imgSrc, alt, mainClass }) => {
  return (
    <>
      <div className={`box_ind_outer m-4 ${mainClass}`}>
        <div className="ind_text_inner">
          <p className="main_text">{content}</p>
          <h4 className="val mb-0">{count}</h4>
        </div>
        <img className="ind_bg" src={imgSrc} alt={alt || ""} />
      </div>
    </>
  );
};

export default SchemeGranularityCard;
