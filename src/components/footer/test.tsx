import { describe, expect, it } from "vitest";
import { createRoutesStub } from "react-router";
import { screen } from "@testing-library/react";
import { render } from "~/test-utils/render";
import Footer from ".";

const Stub = createRoutesStub([
  {
    path: "/",
    Component: Footer,
  },
  {
    path: "/accessbility",
    Component: () => <div>Accessibility</div>,
  },
  {
    path: "/cookie-settings",
    Component: () => <div>Cookie Settings</div>,
  },
  {
    path: "/privacy-policy",
    Component: () => <div>Privacy Policy</div>,
  },
]);

describe("component", () => {
  describe("Footer", () => {
    it("should render correctly", () => {
      render(<Stub />);

      expect(screen.getByRole("contentinfo")).toBeInTheDocument();
    });
  });
});
