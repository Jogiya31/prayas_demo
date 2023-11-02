import React, { useState } from "react";
import sector_i from "../assets/images/sector_i.svg";
import min_i from "../assets/images/min_i.svg";
import scheme_i from "../assets/images/scheme_i.svg";
import indicator_i from "../assets/images/indicator_i.svg";
import national_bg from "../assets/images/national_bg.svg";
import state_bg from "../assets/images/state_bg.svg";
import district_bg from "../assets/images/district_bg.svg";
import villages_bg from "../assets/images/villages_bg.svg";
import misc_bg from "../assets/images/misc_bg.svg";
import { Col, Container, Row } from "react-bootstrap";
import CustomCard from "../components/card/customCard";
import { MultiSelect } from "react-multi-select-component";
import reset_icon from "../assets/images/reset_icon.svg";
import pdf_i from "../assets/images/pdf_i.svg";
import print_i from "../assets/images/print_i.svg";
import { department, disctrics, sectors, state } from "../utils/dropdowns";
import DashboardCard from "../components/card/dashboardCard";
import SchemeGranularityCard from "../components/card/schemeGranularityCard";
import { useReactToPrint } from "react-to-print";
import { usePDF } from "react-to-pdf";
import ExportHeader from "../components/exportHeader";

const Dashboard = () => {
  const [selected, setSelected] = useState([]);
  const [exportFile, setExportFile] = useState(false);
  const handleSelectionChange = (selectedItems) => {
    setSelected(selectedItems);
  };
  // export pdf
  const { toPDF, targetRef } = usePDF({
    filename: "profileData.pdf",
  });

  // handle print table
  const handlePrint = useReactToPrint({
    content: () => targetRef.current,
  });

  return (
    <div>
      <Container className="dropdown__header CKR_pad py-2" fluid>
        <Row className="flex">
          <Col md={9} lg={9} className="flex w-full justify-start py-2">
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
              <button className="CKR__view__btn P_disabled">Submit</button>
            </div>
            <div className="px-1">
              <button className="reset_btn px-2 P_disabled">
                <img src={reset_icon} alt="reset icon" />
              </button>
            </div>
          </Col>
          <Col md={3} lg={3}>
            <Row className="w-full justify-end py-2">
              <ul className="download_reports">
                <li>
                  <img
                    src={pdf_i}
                    alt="icon"
                    title="Export in Pdf"
                    onClick={() => toPDF()}
                  />
                </li>
                <li>
                  <img
                    src={print_i}
                    alt="icon"
                    title="Print"
                    onClick={() => handlePrint()}
                  />
                </li>
              </ul>
            </Row>
          </Col>
        </Row>
      </Container>
      <div className="overview_pad">
        <Container fluid className="overview_pad">
          <Row>
            <Col>
              <CustomCard>
                <div ref={targetRef}>
                  {exportFile ? <ExportHeader /> : ""}
                  <Container className="overview_box-container">
                    <div className="d-flex flex-wrap justify-center">
                      <DashboardCard
                        imgSrc={sector_i}
                        alt={"sector"}
                        content="Sectors"
                        count=""
                        mainClass="sec__val"
                        subClass={""}
                      />

                      <DashboardCard
                        imgSrc={min_i}
                        alt={"Departments"}
                        content="Departments"
                        count=""
                        mainClass="min__val"
                        subClass={"ministry"}
                      />

                      <DashboardCard
                        imgSrc={scheme_i}
                        alt={"Schemes"}
                        content="Schemes"
                        count=""
                        mainClass="sch_val"
                        subClass="scheme"
                      />

                      <DashboardCard
                        imgSrc={indicator_i}
                        alt={"KPIs"}
                        content="KPIs"
                        count=""
                        mainClass="ind__val"
                        subClass="indct"
                      />
                    </div>
                  </Container>
                  <div className="line"></div>
                  <Container className="indicator_box_container">
                    <Row className="ind_heading">
                      <Col md={12}>
                        <h4 className="text-center heading_two">
                          Scheme Granularity
                        </h4>
                      </Col>
                    </Row>
                    <div className="ind_box_main">
                      <div className="d-flex flex-wrap justify-center">
                        <SchemeGranularityCard
                          imgSrc={national_bg}
                          mainClass={"national"}
                          count=""
                          content={"National"}
                        />

                        <SchemeGranularityCard
                          imgSrc={state_bg}
                          alt="state"
                          mainClass={"state"}
                          count=""
                          content="States"
                        />

                        <SchemeGranularityCard
                          imgSrc={district_bg}
                          alt="district"
                          mainClass={"district"}
                          count=""
                          content="Districts"
                        />

                        <SchemeGranularityCard
                          imgSrc={villages_bg}
                          alt="village"
                          mainClass={"village"}
                          count=""
                          content="Villages"
                        />

                        <SchemeGranularityCard
                          imgSrc={misc_bg}
                          alt="misc"
                          mainClass={"misc"}
                          count=""
                          content="Misc."
                        />
                      </div>
                    </div>
                  </Container>
                </div>
              </CustomCard>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Dashboard;
