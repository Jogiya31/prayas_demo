import React, { useState } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { MultiSelect } from "react-multi-select-component";
import reset_icon from "../assets/images/reset_icon.svg";
import arrow_icon from "../assets/images/arrow_icon.svg";
import {
  KPIs,
  department,
  disctrics,
  scheme,
  sectors,
  state,
} from "../utils/dropdowns";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import CustomizeReportCard from "../components/card/customizeReportCard";

const MyReports = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState([]);
  const loader = useSelector((state) => state.report.loader);
  const handleSelectionChange = (selectedItems) => {
    setSelected(selectedItems);
  };

  // go to previous page
  const handleBackBtn = () => {
    navigate(-1);
  };

  return (
    <div>
      <Container className="dropdown__header CKR_pad py-2" fluid>
        <Row className="flex">
          <Col md={10} lg={10} className="flex w-full justify-start py-2">
            <div className="px-1 w-2/12 multi-select-container">
              <MultiSelect
                disableSearch
                options={sectors}
                value={selected}
                onChange={handleSelectionChange}
                overrideStrings={{
                  selectSomeItems: "Sectors",
                }}
                hasSelectAll={true} // Set to true to add a "Select All" option
              />
            </div>
            <div className="px-1 w-2/12 multi-select-container">
              <MultiSelect
                disableSearch
                options={department}
                value={selected}
                onChange={handleSelectionChange}
                overrideStrings={{
                  selectSomeItems: "Departments",
                }}
                hasSelectAll={true} // Set to true to add a "Select All" option
              />
            </div>
            <div className="px-1 w-2/12 multi-select-container">
              <MultiSelect
                disableSearch
                options={scheme}
                value={selected}
                onChange={handleSelectionChange}
                overrideStrings={{
                  selectSomeItems: "Schemes",
                }}
                hasSelectAll={true} // Set to true to add a "Select All" option
              />
            </div>
            <div className="px-1 w-2/12 multi-select-container">
              <MultiSelect
                disableSearch
                options={KPIs}
                value={selected}
                onChange={handleSelectionChange}
                overrideStrings={{
                  selectSomeItems: "KPIs",
                }}
                hasSelectAll={true} // Set to true to add a "Select All" option
              />
            </div>
            <div className="px-1 w-2/12 multi-select-container">
              <MultiSelect
                options={state}
                value={selected}
                onChange={handleSelectionChange}
                overrideStrings={{
                  selectSomeItems: "States/UIs",
                }}
                hasSelectAll={false} // Set to true to add a "Select All" option
              />
            </div>
            <div className="px-1 w-2/12 multi-select-container">
              <MultiSelect
                options={disctrics}
                value={selected}
                onChange={handleSelectionChange}
                overrideStrings={{
                  selectSomeItems: "Districts",
                }}
                hasSelectAll={false} // Set to true to add a "Select All" option
              />
            </div>
            <div className="px-1">
              <button className="CKR__view__btn">Submit</button>
            </div>
            <div className="px-1">
              <button className="reset_btn px-2 P_disabled">
                <img src={reset_icon} alt="reset icon" />
              </button>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="CKR_pad mt-3 CKR__report  main_container_minheight">
        <Container fluid>
          <Row className="mb-3 align-center">
            <Col md={6} className="flex justify-start items-center">
              <p className="prayas_breadcrums mb-0">
                <Link to="/dashboard">Home</Link> {" >> "}
                <Link href="#">Reports</Link> {" >> "}
                <span>My Reports</span>
              </p>
            </Col>
          </Row>
          <div className="shadow__box">
            <div className="heading_container justify-center items-center ">
              <div className="back">
                <Button
                  variant="secondary"
                  className="button text-black justify-center items-center"
                  onClick={() => handleBackBtn()}
                >
                  <Image src={arrow_icon} className="mr-1" alt="back_button" />
                  Back
                </Button>
              </div>
              <h3 className="text-center">My Reports</h3>
            </div>
            <hr />
            <div className="d-flex flex-wrap justify-center">
              {/* <CustomizeReportCard />
              <CustomizeReportCard />
              <CustomizeReportCard /> */}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default MyReports;
