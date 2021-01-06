import React from "react";
import Testimonials from "./Testimonials.js";
import renderer from "react-test-renderer";

describe("Tests the testimonials section", () => {
  it("matches the snapshot", () => {
    const tree = renderer.create(<Testimonials />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
