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
  return {
    getAllArticle: (data?: ArticlesDetailsResponse[]) =>
      http.get(`${API_URL}/assignment/articles`, () => {
        // respond using a mocked JSON body
        return HttpResponse.json(data || ARTICLES);
      }),
    getAllArticleWithError: () =>
      http.get(`${API_URL}/assignment/articles`, () => {
        // respond using a mocked JSON body
        return new HttpResponse(null, {
          status: 500,
          statusText: "Server Error",
        });
      }),
    getArticleById: (data: ArticlesDetailsResponse) =>
      http.get(`${API_URL}/assignment/articles/${data?.id}`, () => {
        // respond using a mocked JSON body
        return HttpResponse.json(data);
      }),
    getArticleByIdWithError: (data: ArticlesDetailsResponse) =>
      http.get(`${API_URL}/assignment/articles/${data?.id}`, () => {
        // respond using a mocked JSON body
        return new HttpResponse(null, {
          status: 500,
          statusText: "Server Error",
        });
      }),
  };
};
