import * as React from "react";
import { render } from "@testing-library/react";
import { expect } from "chai";
import Label from "~/components/Label";

describe("Label", () => {
  it("render", () => {
    const { getByText } = render(<Label text="hi" />);
    const labelElement = getByText(/hi/i);
    expect(document.body.contains(labelElement));
  });
});
