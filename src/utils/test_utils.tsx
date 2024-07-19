import { MemoryRouter, Route, Routes } from "react-router-dom";
import { http, HttpResponse } from "msw";

import { API_URL } from "@config/index";
import { ArticlesDetailsResponse, RouteType } from "@interfaces/index";
import { ARTICLES } from "@tests/mockData";
import { ReactNode } from "react";

export const routeWrapper = (
  routes: RouteType[],
  initialEntries: string[] = ["/"]
): ReactNode => {
  return (
    <MemoryRouter initialEntries={initialEntries}>
      <Routes>
        {routes?.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
        <Route path="*" element={<>No Route found</>} />
      </Routes>
    </MemoryRouter>
  );
};

export const apiHandlers = () => {
  console.log("API", API_URL);
  return {
    getAllArticle: (data: ArticlesDetailsResponse[]) =>
      http.get(`${API_URL}/assignment/articles`, () => {
        // respond using a mocked JSON body
        return HttpResponse.json(data || ARTICLES);
      }),
    getAllArticleId: (data: ArticlesDetailsResponse) =>
      http.get(`${API_URL}/assignment/articles/${ARTICLES[0]?.id}`, () => {
        // respond using a mocked JSON body
        return HttpResponse.json(data || ARTICLES[0]);
      }),
  };
};
