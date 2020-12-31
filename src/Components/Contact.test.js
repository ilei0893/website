import React from "react";
import Contact from "./Contact.js";
import renderer from "react-test-renderer";

describe("Tests the contact section", () => {
  it("matches the snapshot", () => {
    const tree = renderer.create(<Contact />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
