import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import Header from "..";

describe("Header component test", () => {
  test("Test header component snapshot test", () => {
    const container = render(<Header />);
    expect(container).toMatchSnapshot();
  });
});
