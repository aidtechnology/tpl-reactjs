import React from "react";
import ReactDOM from "react-dom";
import App from "~/App";
import "~/index.scss";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// Hot Module Replacement (HMR)
// https://snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
