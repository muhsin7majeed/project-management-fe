import { Routes, Route, Navigate } from "react-router-dom";

import PageNotFound from "components/404";
import Landing from "pages/project/landing";

function IndexRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Navigate to="/projects" replace={true} />} />
			<Route path="/projects" exact element={<Landing />} />
			<Route path="/project/:id" />

			<Route path="*" element={<PageNotFound />} />
		</Routes>
	);
}
export default IndexRoutes;
