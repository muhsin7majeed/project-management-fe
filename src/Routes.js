import { Routes, Route, Navigate } from "react-router-dom";

import PageNotFound from "pages/404/index";
import ProjectLanding from "pages/project/landing";
import ProjectDetais from "pages/project/projects/details";
import AboutLanding from "pages/about/landing";

function IndexRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/projects" replace={true} />} />

      <Route path="/projects" exact element={<ProjectLanding />} />
      <Route path="/project/:id" element={<ProjectDetais />} />

      <Route path="/about" exact element={<AboutLanding />} />

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
export default IndexRoutes;
