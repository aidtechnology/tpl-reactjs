import React from "react";
import ReactDOM from "react-dom";
import Label from "~/components/label";
import Hello from "~/components/hello";

ReactDOM.render(
  <div>
    <Hello name="world" />
    <Label text="=)" />
  </div>,
  document.getElementById("app")
);
