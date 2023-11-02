import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import home from "../../assets/images/home_icon.svg";
import home_w from "../../assets/images/home_icon_w.svg";
import all_scheme_icon_w from "../../assets/images/all_scheme_icon_w.svg";
import all_scheme_icon from "../../assets/images/all_scheme_icon.svg";
import collapse_i from "../../assets/images/collapse_i.svg";
import user_icon_n from "../../assets/images/user_icon_n.svg";
import expand_i from "../../assets/images/expand_i.svg";
import arrow_icon from "../../assets/images/arrow_icon.svg";
import critical_kpi_icon from "../../assets/images/critical_kpi_icon.svg";
import state_district_icon from "../../assets/images/state_district_icon.svg";
import reports_icon from "../../assets/images/reports_icon.svg";
import reports_icon_w from "../../assets/images/reports_icon_w.svg";
import Dropdown from "react-bootstrap/Dropdown";
import { Image } from "react-bootstrap";

const Sidebar = ({ toggleMenu, settoggleMenu }) => {
  const [showSubmenu, setshowSubmenu] = useState(false);
  const [activeMenu, setactiveMenu] = useState("home");
  const [activeSubMenu, setactiveSubMenu] = useState("");

  const handleShowSubmenu = (val) => {
    setshowSubmenu(val);
  };

  const handleSideMenu = (val) => {
    setactiveMenu(val);
    setactiveSubMenu("");
    setshowSubmenu(false);
  };

  const handleSubmenuClicked = (event, val) => {
    event.stopPropagation();
    if (toggleMenu) {
      setshowSubmenu(false);
    }
    if (showSubmenu) {
      setactiveSubMenu(val);
    }
  };

  return (
    <div className="Prayas_sidebar">
      <div className="menu_toggle">
        <img
          src={collapse_i}
          alt=""
          className="collapse_i"
          onClick={() => {
            settoggleMenu(!toggleMenu);
            setshowSubmenu(false);
          }}
        />
        <img
          src={expand_i}
          alt=""
          className="expand_i"
          onClick={() => settoggleMenu(!toggleMenu)}
        />
      </div>
      <div className="flex items-center justify-center ">
        {!toggleMenu ? (
          <div className="">
            <Image
              className="text-center ml-5"
              src={user_icon_n}
              roundedCircle
              alt="user icon"
              width={"50px"}
            />
            <Dropdown>
              <Dropdown.Toggle
                id="dropdown-basic"
                className=" text-white p-2 rounded-md bg-transparent border-0 font-bold"
              >
                UserName
              </Dropdown.Toggle>

              <Dropdown.Menu className="user_dropdown_menu">
                <Dropdown.Item className="">Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        ) : (
          <div>
            <Image
              className=""
              src={user_icon_n}
              roundedCircle
              alt="user icon"
              width={"40px"}
            />
          </div>
        )}
      </div>
      <div className="h-full ">
        <ul className="Prayas_sidebar_menu over_menu">
          <li className="">
            <Link
              to="/dashboard"
              className={`Prayas__menu__list ${
                activeMenu === "home" ? "active" : ""
              } `}
              onClick={() => handleSideMenu("home")}
            >
              <img src={activeMenu === "home" ? home : home_w} alt="icon" />
              <span>Home</span>
            </Link>
          </li>
          <li className="">
            <Link
              to="/scheme-view"
              className={`Prayas__menu__list ${
                activeMenu === "all_scheme_icon_w" ? "active" : ""
              } `}
              onClick={() => handleSideMenu("all_scheme_icon_w")}
            >
              <img
                src={
                  activeMenu === "all_scheme_icon_w"
                    ? all_scheme_icon
                    : all_scheme_icon_w
                }
                alt="icon"
              />{" "}
              <span>All Schemes</span>
            </Link>
          </li>
          <li className="">
            <Link
              to="/critical-Kpis"
              className={`Prayas__menu__list ${
                activeMenu === "critical_kpi_icon" ? "active" : ""
              } `}
              onClick={() => handleSideMenu("critical_kpi_icon")}
            >
              <img
                src={
                  activeMenu === "critical_kpi_icon"
                    ? critical_kpi_icon
                    : critical_kpi_icon
                }
                alt="icon"
              />{" "}
              <span>Critical KPIs</span>
            </Link>
          </li>
          <li className="">
            <Link
              to="/state-district-analysis"
              className={`Prayas__menu__list ${
                activeMenu === "state_district_icon" ? "active" : ""
              } `}
              onClick={() => handleSideMenu("state_district_icon")}
            >
              <img
                src={
                  activeMenu === "state_district_icon"
                    ? state_district_icon
                    : state_district_icon
                }
                alt="icon"
              />{" "}
              <span>State/District Analysis</span>
            </Link>
          </li>
          <li className="treeview">
            <div className="" onClick={() => handleShowSubmenu(!showSubmenu)}>
              <Link
                className={`Prayas__menu__list ${
                  activeMenu === "Reports" ? "active" : ""
                } `}
                onClick={() => setactiveMenu("Reports")}
              >
                <img
                  src={activeMenu === "Reports" ? reports_icon : reports_icon_w}
                  alt="icon"
                  style={{ filter: "brightness(10.5)" }}
                />
                <span>Reports</span>
                <img
                  src={arrow_icon}
                  alt="icon"
                  className="arrow_dropdown"
                  style={{ filter: "brightness(10.5)" }}
                />
              </Link>
              <ul
                className={`treeview-menu menu-open ${
                  showSubmenu ? "block" : "hidden"
                }`}
                onClick={handleSubmenuClicked}
              >
                <li>
                  <Link
                    to="/"
                    className="disable_link disabled"
                    onClick={(e) => {
                      handleSubmenuClicked(e, "reports");
                    }}
                  >
                    Default Reports
                  </Link>
                  <div className="treeview-sub-menu">
                    <ul className="sub_menu_list">
                      <li>
                        <Link
                          to="/higlyCriticalKpis"
                          className={
                            activeSubMenu === "Highly_Critical" ? "active" : ""
                          }
                          onClick={(e) => {
                            handleSubmenuClicked(e, "Highly_Critical");
                          }}
                        >
                          National KPIs - Highly Critical
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/criticalKpis"
                          className={
                            activeSubMenu === "Critical" ? "active" : ""
                          }
                          onClick={(e) => {
                            handleSubmenuClicked(e, "Critical");
                          }}
                        >
                          National KPIs - Critical
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/sectoralkpis"
                          className={
                            activeSubMenu === "Sectoral KPIs" ? "active" : ""
                          }
                          onClick={(e) => {
                            handleSubmenuClicked(e, "Sectoral KPIs");
                          }}
                        >
                          Sectoral KPIs
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/stateDistrictAnalysis"
                          className={
                            activeSubMenu === "State/District" ? "active" : ""
                          }
                          onClick={(e) => {
                            handleSubmenuClicked(e, "State/District");
                          }}
                        >
                          State/District Analysis
                        </Link>
                      </li>
                      <li className="pb-2">
                        <Link
                          to="/schemeAnalysis"
                          className={
                            activeSubMenu === "Scheme Analysis" ? "active" : ""
                          }
                          onClick={(e) => {
                            handleSubmenuClicked(e, "Scheme Analysis");
                          }}
                        >
                          Scheme Analysis
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="pb-1">
                  <Link
                    to="/myReports"
                    className={activeSubMenu === "My Report" ? "active" : ""}
                    onClick={(e) => {
                      handleSubmenuClicked(e, "My Reports");
                    }}
                  >
                    My Reports
                  </Link>
                </li>
                <li>
                  <Link
                    to="/designReports"
                    className={
                      activeSubMenu === "Design Reports" ? "active" : ""
                    }
                    onClick={(e) => {
                      handleSubmenuClicked(e, "Design Reports");
                    }}
                  >
                    Design Reports
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
