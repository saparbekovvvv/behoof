import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import store from "./store/store.ts";
import "./index.css";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import firebaseInit from "./firebase/config.ts";

firebaseInit();
ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
