import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import { render } from "~/test-utils/render";
import Location from ".";

describe("component", () => {
  describe("Location", () => {
    it("should render correctly", () => {
      render(<Location id="location" aria-label="Location" />);

      expect(screen.getByRole("region")).toBeInTheDocument();
    });
  });
});
