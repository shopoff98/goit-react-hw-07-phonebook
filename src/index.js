// index.js
import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@emotion/react";
import App from "./App";
import { theme } from "./components/constants/theme";
import { Provider } from "react-redux";
import { store } from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
