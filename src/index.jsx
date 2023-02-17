import { createRoot } from 'react-dom/client';
import { MainView } from './components/main-view/main-view';
import './index.scss';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    // Browser Router implementation
    <BrowserRouter>
      <MainView />
    </BrowserRouter>
  );
};

const container = document.querySelector("#root");
const root = createRoot(container);
root.render(<App />);