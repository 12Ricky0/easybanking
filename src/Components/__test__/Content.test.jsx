import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Content from "../Content";

describe("Content", () => {
  it("renders the content correctly", () => {
    render(<Content />);
    expect(screen.getAllByRole("heading", { level: 1 })[0]).toBeInTheDocument();
  });
});
