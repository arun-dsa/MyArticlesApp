import { ReactNode } from "react";
import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import { routeWrapper } from "@utils/test_utils";
import ArticlesSkeleton from "..";

describe("Article card skeleton test", () => {
  test("Test render article card skeleton", () => {
    const ArticleRoute: ReactNode = routeWrapper([
      { path: "/", element: <ArticlesSkeleton id="1" /> },
    ]);
    const container = render(ArticleRoute);
    expect(container).toMatchSnapshot();
  });
});
