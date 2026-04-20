import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import { render } from "~/test-utils/render";
import Availability from ".";

describe("component", () => {
  describe("Availability", () => {
    it("should render correctly", () => {
      render(<Availability id="availability" aria-label="Current Capacity" />);

      expect(screen.getByRole("region")).toBeInTheDocument();
    });

    it("should render correctly, shows 43%", () => {
      render(
        <Availability
          id="availability"
          capacity={7}
          occupied={3}
          aria-label="Current Capacity"
        />,
      );

      expect(screen.getByText("43% Occupied")).toBeInTheDocument();
    });
  });
});
