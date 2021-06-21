import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";

it("should load", function() {
  render(<Carousel />);
});

it("should pass a snapshot", function () {
  const { asFragment } = render(<Carousel />);
  expect(asFragment).toMatchSnapshot();
});


it("works when right arrow clicked", function () {
  const { queryByTestId, queryByAltText } = render(<Carousel />);

  // expect the first image to show, but not the second
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = queryByTestId("right-arrow");

  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).not.toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).toBeInTheDocument();

});

it("works when left arrow clicked", function() {
  const { getByTestId, queryByAltText } = render(<Carousel />);

  // expect the first image to show, but not the second
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = getByTestId("right-arrow");
  const leftArrow = getByTestId("left-arrow");

  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).not.toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).toBeInTheDocument();


  fireEvent.click(leftArrow);
  // expect the first image to show, but not the second
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();

});

it("should not have the left arrow on the first image", function () {
  const { queryByTestId } = render(<Carousel startIdx={0} />);

  const leftArrow = queryByTestId("left-arrow");
  expect(leftArrow).not.toBeInTheDocument();

});

it("should not have the right arrow on the last image", function () {
  const { queryByTestId } = render(<Carousel cardData={[
    {
      src: "bogusURL",
      caption: "ONE BOGUS IMAGE"
    }]} />);

  const rightArrow = queryByTestId("right-arrow");
  expect(rightArrow).not.toBeInTheDocument();

});

