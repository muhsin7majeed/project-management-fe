import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { ROUTE_PATHS } from "helpers/constants";

import PageNotFound from "pages/404/index";
import ProjectLanding from "pages/project/landing";
import ProjectDetais from "pages/project/projects/details";
import AboutLanding from "pages/about/landing";

function IndexRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={ROUTE_PATHS.PROJECTS} replace={true} />} />

      <Route path={ROUTE_PATHS.PROJECTS} element={<ProjectLanding />} />
      <Route path={ROUTE_PATHS.PROJECT_DETAILS} element={<ProjectDetais />} />

      <Route path={ROUTE_PATHS.ABOUT} element={<AboutLanding />} />

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
export default IndexRoutes;
