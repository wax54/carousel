import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";

it("should load", function() {
  render(<Card />);
});

it('should match previous snapshot', function () {
  const {asFragment } = render(<Card />);
  expect(asFragment).toMatchSnapshot();
});
