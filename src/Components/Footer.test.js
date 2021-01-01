import React from "react";
import Footer from "./Footer.js";
import renderer from "react-test-renderer";

describe("Tests the footer section", () => {
  it("matches the snapshot", () => {
    const tree = renderer.create(<Footer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
