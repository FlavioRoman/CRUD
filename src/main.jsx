import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RegistersProvider } from "./context/useConext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RegistersProvider>
    <App />
  </RegistersProvider>
);
