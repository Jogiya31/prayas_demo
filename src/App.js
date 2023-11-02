import { useState } from "react";
import "./App.css";
import Sidebar from "./components/layout/sidebar";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import Dashboard from "./pages/dashboard";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainContainer from "./components/layout/MainContainer";
import HighlyCriticalKpis from "./pages/highlyCriticalKpis";
import CriticalKpis from "./pages/criticalKpis";
import SectoralKpis from "./pages/sectoralKpis";
import StateDistrictAnalysis from "./pages/stateDistrictAnalysis";
import SchemeAnalysis from "./pages/schemeAnalysis";
import MyReports from "./pages/myReports";
import DesignReport from "./pages/designReports";
import PageNotFound from "./pages/pageNotFound";

function App() {
  const [toggleMenu, settoggleMenu] = useState(false);
  return (
    <div className={toggleMenu ? "menu_slide" : ""}>
      <BrowserRouter>
        <Sidebar toggleMenu={toggleMenu} settoggleMenu={settoggleMenu} />
        <Header />
        <MainContainer>
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route
              exact
              path="/higlyCriticalKpis"
              element={<HighlyCriticalKpis />}
            />
            <Route exact path="/criticalKpis" element={<CriticalKpis />} />
            <Route exact path="/sectoralkpis" element={<SectoralKpis />} />
            <Route
              exact
              path="/stateDistrictAnalysis"
              element={<StateDistrictAnalysis />}
            />
            <Route exact path="/schemeAnalysis" element={<SchemeAnalysis />} />
            <Route exact path="/myReports" element={<MyReports />} />
            <Route exact path="/designReports" element={<DesignReport />} />
            <Route exact path="/scheme-view" element={<PageNotFound />} />
            <Route
              exact
              path="/state-district-analysis"
              element={<PageNotFound />}
            />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </MainContainer>
        <Footer className="overview_pad prayas__ml_250" />
      </BrowserRouter>
    </div>
  );
}

export default App;
