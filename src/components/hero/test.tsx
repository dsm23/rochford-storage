import { describe, expect, it } from "vitest";
import { MemoryRouter } from "react-router";
import { screen } from "@testing-library/react";
import { render } from "~/test-utils/render";
import Hero from ".";

describe("component", () => {
  describe("Hero", () => {
    it("should render correctly", () => {
      render(<Hero id="hero" aria-label="Hero" />, { wrapper: MemoryRouter });

      expect(screen.getByRole("region")).toBeInTheDocument();
    });
  });
});
