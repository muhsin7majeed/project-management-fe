import { Routes, Route, Navigate } from "react-router-dom";

import ProjectLanding from "pages/project/landing";
import ClientLanding from "pages/client/landing";
import PageNotFound from "pages/404/index";

function IndexRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/projects" replace={true} />} />

      <Route path="/projects" exact element={<ProjectLanding />} />
      <Route path="/project/:id" />

      <Route path="/clients" exact element={<ClientLanding />} />
      <Route path="/client/:id" />

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
export default IndexRoutes;
