import { expect } from "chai";
import { shallow } from "enzyme";

// Component
import React from "react";
import Hello from "~/components/hello";

describe("Hello", () => {
  it("render", () => {
    const wrapper = shallow(<Hello name="world" />);
    expect(wrapper.find("span").text()).equals("Hello world!");
  });
});
