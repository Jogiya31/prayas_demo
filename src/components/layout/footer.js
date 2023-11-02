import React from "react";
import NICSI_logo from "../../assets/images/NICSI_logo.svg";
import NIC_logo from "../../assets/images/NIC_logo.svg";

const Footer = () => {
  return (
    <>
      <div className="flex justify-between items-center prayas__footer py-2 prayas__ml_250">
        <div className="mx-4">
          <img src={NIC_logo} alt="NIC Logo" />
        </div>
        <div className="mx-5">
          <p className="mb-0 text-center">
            Prayas has been developed under the guidance of Prime Minister’s
            office with inputs from Departments.
            <br />
            The Platform is designed and developed by Data Analytics,
            Visualizaton and Dashboard (DAVD) Division, NIC and Centre of
            Excellence for Data Analytics(CEDA), NICSI.
          </p>
        </div>
        <div className="mx-4">
          <img src={NICSI_logo} alt="NICSI Logo" />
        </div>
      </div>
    </>
  );
};

export default Footer;
