import { ReactNode } from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import { routeWrapper } from "@utils/test_utils";
import { ARTICLES } from "@tests/mockData";
import ArticlesCard from "..";
import { NAVIGATION_LINKS } from "@config/constants";

describe("Article card test", () => {
  const article = ARTICLES[0];
  test("Test render article card", () => {
    const ArticleRoute: ReactNode = routeWrapper([
      {
        path: NAVIGATION_LINKS.ROOT,
        element: <ArticlesCard article={article} />,
      },
      {
        path: NAVIGATION_LINKS.ARTICLE_DETAILS,
        element: <>Article details page</>,
      },
    ]);

    render(ArticleRoute);

    expect(
      screen.getByTestId(`article-title-${article.id}`)
    ).toBeInTheDocument();
    expect(screen.getByTestId(`article-title-${article.id}`)).toHaveTextContent(
      article.title
    );

    expect(
      screen.getByTestId(`article-summary-${article.id}`)
    ).toBeInTheDocument();
    expect(
      screen.getByTestId(`article-summary-${article.id}`)
    ).toHaveTextContent(article.summary);

    expect(
      screen.getByTestId(`share-article-${article.id}`)
    ).toBeInTheDocument();

    expect(
      screen.getByTestId(`share-article-${article.id}`)
    ).toBeInTheDocument();
    expect(
      screen.getByTestId(`article-view-full-${article.id}`)
    ).toBeInTheDocument();

    fireEvent.click(screen.getByTestId(`article-view-full-${article.id}`));

    expect(screen.getByText("Article details page")).toBeInTheDocument();
  });

  test("Test snapshot of article card", () => {
    const ArticleRoute: ReactNode = routeWrapper([
      { path: "/", element: <ArticlesCard article={article} /> },
    ]);

    const container = render(ArticleRoute);
    expect(container).toMatchSnapshot();
  });
});
