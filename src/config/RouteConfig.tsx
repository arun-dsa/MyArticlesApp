import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "@pages/ErrorPage";
import RootLayout from "@pages/RootLayout";
import ArticlesList from "@pages/ArticlesList";
import ArticleDetails from "@pages/ArticleDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <ArticlesList />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/articles",
        element: <ArticlesList />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: "/articles/:id",
            element: <ArticleDetails />,
            errorElement: <ErrorPage />,
          },
          {
            path: "*",
            element: <ErrorPage />,
          },
        ],
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

export { router };
