import React from "react";
import Header from "./Header.js";
import renderer from "react-test-renderer";

describe("Tests the header section", () => {
  it("matches the snapshot", () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
