import { RouterProvider } from "react-router-dom";

import { router } from "@config/RouteConfig";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
