import { createRoot } from "react-dom/client";
import { MainView } from "./components/main-view/main-view";
import "./index.scss";

const App = () => {
  return (
    <div className="main">
      <MainView />
    </div>
  );
};

const container = document.querySelector("#root");
const root = createRoot(container);
root.render(<App />);