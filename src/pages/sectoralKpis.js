import React, { useState } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { MultiSelect } from "react-multi-select-component";
import reset_icon from "../assets/images/reset_icon.svg";
import arrow_icon from "../assets/images/arrow_icon.svg";
import pdf_i from "../assets/images/pdf_i.svg";
import print_i from "../assets/images/print_i.svg";
import excel_i from "../assets/images/excel_i.svg";
import {
  KPIs,
  department,
  disctrics,
  scheme,
  sectors,
  state,
} from "../utils/dropdowns";
import { Link, useNavigate } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import { usePDF } from "react-to-pdf";
import { createColumnHelper } from "@tanstack/react-table";
import moment from "moment";
import CustomTable from "../components/table";
const SectoralKpis = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState([]);
  const loader = false;
  const handleSelectionChange = (selectedItems) => {
    setSelected(selectedItems);
  };

  // go to previous page
  const handleBackBtn = () => {
    navigate(-1);
  };

  // export table pdf
  const { toPDF, targetRef } = usePDF({
    filename: "Sectoral KPIs.pdf",
  });

  // handle print table
  const handlePrint = useReactToPrint({
    content: () => targetRef.current,
  });

  // table required contents
  const columnHelper = createColumnHelper();
  const columns = [
    columnHelper.accessor("Application_No", {
      header: "#",
      cell: (info) => {
        const _idx = Number(info.row.id) + 1;
        return <div className="flex justify-center items-center">{_idx}</div>;
      },
    }),
    columnHelper.accessor("kpi_category", {
      header: "Category",
      cell: (info) => (
        <div className="flex justify-center items-center">
          <span className="font-semibold">{info.getValue()}</span>
        </div>
      ),
    }),
    columnHelper.accessor("kpi_display_name", {
      header: "KPIs",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("Value", {
      header: "KPIs Value",
      cell: (info) => {
        const Start_Date = info.row.original.Start_Date;
        const End_date = info.row.original.End_date;
        return (
          <div className="flex justify-center items-center">
            <div className="flex-col flex items-center">
              <span className="font-semibold">{info.getValue()}</span>
              <span>
                {`(${moment(Start_Date).format("MMM YY")} to ${moment(
                  End_date
                ).format("MMM YY")})`}
              </span>
            </div>
          </div>
        );
      },
    }),
    columnHelper.accessor("Scheme_Name", {
      header: "Scheme",
      cell: (info) => (
        <div className="flex justify-center items-center">
          <div className="flex-col flex items-center">
            <span className="font-semibold">{info.getValue()}</span>
            <span>{`(${info.row.original.dep_name})`}</span>
          </div>
        </div>
      ),
    }),
  ];

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
                <Link href="#"> Default Reports</Link> {" >> "}
                <span>Sectoral KPIs</span>
              </p>
            </Col>
            <Col md={6} className="flex justify-end">
              <input
                type="search"
                placeholder="Search..."
                className="form-control w-50 "
                style={{ margin: "0 0 0 auto" }}
              />
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
              <h3 className="text-center">Sectoral KPIs</h3>
              <ul className="downlable_reports">
                <li>
                  <img
                    src={excel_i}
                    alt="icon"
                    title="Export in Excel"
                    className="cursor-pointer"
                  />
                </li>
                <li>
                  <img
                    src={pdf_i}
                    alt="icon"
                    title="Export in Pdf"
                    className="cursor-pointer"
                    onClick={() => toPDF()}
                  />
                </li>
                <li>
                  <img
                    src={print_i}
                    alt="icon"
                    title="Print"
                    className="cursor-pointer"
                    onClick={() => handlePrint()}
                  />
                </li>
              </ul>
            </div>
            <hr />
            <div ref={targetRef}>
              <CustomTable
                data={[]}
                loader={loader}
                columns={columns}
                headerStyle="sectoral_kpis"
              />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default SectoralKpis;
