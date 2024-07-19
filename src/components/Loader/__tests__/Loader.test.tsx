import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import Loader from "..";

describe("Loader component test", () => {
  test("Test Loader component snapshot test", () => {
    const container = render(<Loader />);
    expect(container).toMatchSnapshot();
  });
});
