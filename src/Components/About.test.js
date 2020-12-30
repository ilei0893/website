import About from "./About.js";
import React from "react";
import renderer from "react-test-renderer";

describe("Tests the About section", () => {
  it("matches the snapshot", () => {
    const tree = renderer.create(<About />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
