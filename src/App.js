import React from "react";
import "./App.css";

function App() {
  return React.createElement(
    "div",
    {
      className: "App",
    },
    React.createElement(
      "header",
      {
        className: "App-header",
      },
      React.createElement(
        "p",
        null,
        "Edit ",
        React.createElement("code", null, "src/App.js"),
        " and save to reload."
      ),
      /*#__PURE__*/ React.createElement(
        "a",
        {
          className: "App-link",
          href: "https://reactjs.org",
          target: "_blank",
          rel: "noopener noreferrer",
        },
        "Learn React"
      )
    )
  );
}

export default App;
