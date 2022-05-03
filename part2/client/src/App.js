import Form from "./Form";
import "./style.css"
import {
  BrowserRouter,
  Routes,
  Route, Navigate
} from "react-router-dom";
import Find from "./Find";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/search" element={<Find />} />
          <Route
            path="*"
            element={<Navigate to="/" replace />}
          />
        </Routes>
      </BrowserRouter>

    </div>

  );
}

export default App;
