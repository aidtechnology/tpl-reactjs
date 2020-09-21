import { expect } from "chai";
import { shallow } from "enzyme";

// Component
import React from "react";
import Label from "~/components/label";

describe("Label", () => {
  it("render", () => {
    const wrapper = shallow(<Label text="hi" />);
    expect(wrapper.find("pre")).text().equals("hi");
  });
});
