import { screen, render, waitFor } from "@testing-library/react";
import { setupServer } from "msw/node";
import { afterAll, afterEach, beforeAll, describe, expect, test } from "vitest";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { routeWrapper, apiHandlers } from "@utils/test_utils";
import { ARTICLES } from "@tests/mockData";
import ArticleList from "../index";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

describe("Article List test", () => {
  const server = setupServer(apiHandlers()?.getAllArticle());

  beforeAll(() => server.listen());

  afterEach(() => {
    server.resetHandlers();
    queryClient.clear();
  });

  afterAll(() => server.close());

  test("Article List screen render", async () => {
    const { container } = render(
      <QueryClientProvider client={queryClient}>
        {routeWrapper([{ path: "/", element: <ArticleList /> }])}
      </QueryClientProvider>
    );

    expect(screen.getAllByTestId("article-card-skeleton")).toHaveLength(10);

    ARTICLES?.forEach((article) =>
      expect(
        screen.queryByTestId(`article-card-${article.id}`)
      ).not.toBeInTheDocument()
    );

    await screen.findByTestId(`article-card-${ARTICLES[0].id}`);

    ARTICLES?.map((article) =>
      expect(
        screen.queryByTestId(`article-card-${article.id}`)
      ).toBeInTheDocument()
    );

    expect(container).toMatchSnapshot();
  });
});

describe("Article List test with Error", () => {
  const server = setupServer(apiHandlers()?.getAllArticleWithError());

  beforeAll(() => server.listen());

  afterEach(() => {
    server.resetHandlers();
    queryClient.clear();
  });

  afterAll(() => server.close());

  test("Error screen render", async () => {
    const { container } = render(
      <QueryClientProvider client={queryClient}>
        {routeWrapper([{ path: "/", element: <ArticleList /> }])}
      </QueryClientProvider>
    );

    expect(screen.getAllByTestId("article-card-skeleton")).toHaveLength(10);

    ARTICLES?.forEach((article) =>
      expect(
        screen.queryByTestId(`article-card-${article.id}`)
      ).not.toBeInTheDocument()
    );

    await screen.findByTestId("error-page");

    expect(screen.getByText("Something went wrong")).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});
