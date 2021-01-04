import React from "react";
import Resume from "./Resume.js";
import renderer from "react-test-renderer";

describe("Tests the resume section", () => {
  it("matches the snapshot", () => {
    const tree = renderer.create(<Resume />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
