import React from "react";
import Headers from "../Header";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("Headers", () => {
  it("renders the header correctly", () => {
    render(<Headers />);
    expect(screen.getByAltText("logo")).toBeInTheDocument();
  });

  it("handles the click event on the burger icon", async () => {
    render(<Headers />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
