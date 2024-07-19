import { ReactNode } from "react";
import { screen, render } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import { routeWrapper } from "@utils/test_utils";
import { ARTICLES } from "@tests/mockData";
import ArticlesDetailsCard from "..";
import { NAVIGATION_LINKS } from "@config/constants";

describe("Article details card test", () => {
  const article = ARTICLES[0];
  test("Test render article details", () => {
    const ArticleRoute: ReactNode = routeWrapper([
      {
        path: NAVIGATION_LINKS.ROOT,
        element: <ArticlesDetailsCard article={article} />,
      },
    ]);

    render(ArticleRoute);

    expect(
      screen.getByTestId(`article-details-title-${article.id}`)
    ).toBeInTheDocument();
    expect(
      screen.getByTestId(`article-details-title-${article.id}`)
    ).toHaveTextContent(article.title);

    expect(
      screen.getByTestId(`article-details-summary-${article.id}`)
    ).toBeInTheDocument();
    expect(
      screen.getByTestId(`article-details-summary-${article.id}`)
    ).toHaveTextContent(article.summary);

    expect(
      screen.getByTestId(`article-details-full-text-${article.id}`)
    ).toBeInTheDocument();
    expect(
      screen.getByTestId(`article-details-full-text-${article.id}`)
    ).toHaveTextContent(article.fullText);

    expect(
      screen.getByTestId(`share-article-${article.id}`)
    ).toBeInTheDocument();
  });

  test("Test snapshot of article details", () => {
    const ArticleRoute: ReactNode = routeWrapper([
      { path: "/", element: <ArticlesDetailsCard article={article} /> },
    ]);

    const container = render(ArticleRoute);
    expect(container).toMatchSnapshot();
  });
});
