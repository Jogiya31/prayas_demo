import React, { useState } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import arrow_icon from "../assets/images/arrow_icon.svg";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const DesignReport = () => {
  const navigate = useNavigate();

  // go to previous page
  const handleBackBtn = () => {
    navigate(-1);
  };

  return (
    <div>
      <div className="CKR_pad mt-3 CKR__report  main_container_minheight">
        <Container fluid>
          <Row className="mb-3 align-center">
            <Col md={6} className="flex justify-start items-center">
              <p className="prayas_breadcrums mb-0">
                <Link to="/dashboard">Home</Link> {" >> "}
                <Link href="#">Reports</Link> {" >> "}
                <span>Design Reports</span>
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
              <h3 className="text-center">Design Reports</h3>
            </div>
            <hr />
            <div class="Scheme_container reports_table">
              <p class="design_container">Design Report Here</p>
              <hr />
              <button class="saved_design_btn">Save</button>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default DesignReport;
