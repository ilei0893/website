import React from "react";
import Portfolio from "./Portfolio.js";
import renderer from "react-test-renderer";

describe("Tests the portfolio section", () => {
  it("matches the snapshot", () => {
    const tree = renderer.create(<Portfolio />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
