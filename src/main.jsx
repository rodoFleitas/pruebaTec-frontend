import ReactDOM from "react-dom/client";

import "./index.css";

import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import store from "./Redux/Store";
import AppLayout from "./AppLayout.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Router>
      <AppLayout />
    </Router>
  </Provider>
);
