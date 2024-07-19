import { ReactNode } from "react";
import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import { routeWrapper } from "@utils/test_utils";
import ArticlesDetailsSkeleton from "..";

describe("Article details skeleton test", () => {
  test("snapshot test for article details skeleton", () => {
    const ArticleRoute: ReactNode = routeWrapper([
      { path: "/", element: <ArticlesDetailsSkeleton /> },
    ]);
    const container = render(ArticleRoute);
    expect(container).toMatchSnapshot();
  });
});
