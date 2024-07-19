import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "@pages/ErrorPage";
import RootLayout from "@pages/RootLayout";
import ArticlesList from "@pages/ArticlesList";
import ArticleDetails from "@pages/ArticleDetails";
import Loader from "@components/Loader";
import { NAVIGATION_LINKS } from "./constants";

const pageNotFoundError: Error = new Error("Requested page not found");

const router = createBrowserRouter([
  {
    path: NAVIGATION_LINKS.ROOT,
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    loader: () => <Loader />,
    children: [
      {
        index: true,
        element: <ArticlesList />,
        errorElement: <ErrorPage />,
      },
      {
        path: NAVIGATION_LINKS.ARTICLES,
        element: <ArticlesList />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: NAVIGATION_LINKS.ARTICLE_DETAILS,
            element: <ArticleDetails />,
            errorElement: <ErrorPage />,
          },
          {
            path: "*",
            element: <ErrorPage errorResponse={pageNotFoundError} />,
          },
        ],
      },
      {
        path: "*",
        element: <ErrorPage errorResponse={pageNotFoundError} />,
      },
    ],
  },
]);

export { router };
