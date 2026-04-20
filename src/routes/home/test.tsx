import { describe, expect, it } from "vitest";
import { MemoryRouter } from "react-router";
import { render } from "@testing-library/react";
import Home from ".";

describe("component", () => {
  describe("Home", () => {
    it("should render correctly", () => {
      const { container } = render(<Home />, { wrapper: MemoryRouter });

      expect(container.firstChild).toBeTruthy();
    });
  });
});
