import { describe, expect, it } from "vitest";
import { MemoryRouter } from "react-router";
import { screen } from "@testing-library/react";
import { render } from "~/test-utils/render";
import Navbar from ".";

describe("component", () => {
  describe("Navbar", () => {
    it("should render correctly", () => {
      render(<Navbar />, { wrapper: MemoryRouter });

      expect(screen.getByRole("navigation")).toBeInTheDocument();
    });
  });
});
