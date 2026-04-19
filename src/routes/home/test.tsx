import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Home from ".";

describe("component", () => {
  describe("Home", () => {
    it("should render correctly", () => {
      const { container } = render(<Home />);

      expect(container.firstChild).toBeTruthy();
    });
  });
});
