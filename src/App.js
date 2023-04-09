import "./App.css";
import "./assets/nav.css";
import Nav from "./templates/nav";
import { Provider } from "react-redux";
import link from "./store";

// react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import HireMe from "./templates/hireMe";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Provider store={link}>
                <Nav />
              </Provider>
            }
          >
            <Route index element={<></>} />
            <Route path="about" element={<></>} />
            <Route path="interest" element={<></>} />
            <Route path="contact" element={<></>} />
            <Route path="experience" element={<></>} />
          </Route>
        </Routes>
      </BrowserRouter>
      <HireMe />
    </div>
  );
}

export default App;
