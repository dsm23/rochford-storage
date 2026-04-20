import { describe, expect, it } from "vitest";
import { render } from "~/test-utils/render";
import Map from ".";

describe("component", () => {
  describe("Map", () => {
    it("should render correctly", () => {
      const { container } = render(<Map />);

      expect(container.firstChild).toBeTruthy();
    });
  });
});
