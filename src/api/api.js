import axiosClient from "./axiosClient";

// api call for get all national kpis critical
export const loadNationalKpiCritical = () => {
  const url = `/ReportsApi/LoadNationalKpiCritical`;
  return axiosClient().post(url);
};
