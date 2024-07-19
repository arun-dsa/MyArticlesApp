import { screen, render } from "@testing-library/react";
import { setupServer } from "msw/node";
import { afterAll, afterEach, beforeAll, describe, expect, test } from "vitest";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { routeWrapper, apiHandlers } from "@utils/test_utils";
import { ARTICLES } from "@tests/mockData";
import ArticleDetails from "../index";
import { NAVIGATION_LINKS } from "@config/constants";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

describe("Article Details test", () => {
  const server = setupServer(apiHandlers()?.getArticleById(ARTICLES[0]));

  beforeAll(() => server.listen());

  afterEach(() => {
    server.resetHandlers();
    queryClient.clear();
  });

  afterAll(() => server.close());

  test("Article Details screen render", async () => {
    const { getAllByTestId, findByTestId, queryByTestId } = render(
      <QueryClientProvider client={queryClient}>
        {routeWrapper(
          [
            {
              path: NAVIGATION_LINKS.ARTICLE_DETAILS,
              element: <ArticleDetails />,
            },
          ],
          [`${NAVIGATION_LINKS.ARTICLES}/${ARTICLES[0].id}`]
        )}
      </QueryClientProvider>
    );

    expect(getAllByTestId("article-details-skeleton")).toHaveLength(1);

    await findByTestId(`article-details-card-${ARTICLES[0].id}`);
    expect(
      queryByTestId(`article-details-card-${ARTICLES[0].id}`)
    ).toBeInTheDocument();
  });
});

describe("Article Details test with Error", () => {
  const server = setupServer(
    apiHandlers()?.getArticleByIdWithError(ARTICLES[0])
  );

  beforeAll(() => server.listen());

  afterEach(() => {
    server.resetHandlers();
    queryClient.clear();
  });

  afterAll(() => server.close());

  test("Error screen render", async () => {
    const { getAllByTestId, findByTestId } = render(
      <QueryClientProvider client={queryClient}>
        {routeWrapper(
          [
            {
              path: NAVIGATION_LINKS.ARTICLE_DETAILS,
              element: <ArticleDetails />,
            },
          ],
          [`${NAVIGATION_LINKS.ARTICLES}/${ARTICLES[0].id}`]
        )}
      </QueryClientProvider>
    );

    expect(getAllByTestId("article-details-skeleton")).toHaveLength(1);

    await findByTestId("article-details-error");

    expect(
      screen.getByText(
        "An error occurred while fetching article details.Response status: 500"
      )
    ).toBeInTheDocument();
  });
});
