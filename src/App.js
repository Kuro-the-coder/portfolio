import React from "react";

// css
import "./App.css";
import "./assets/nav.css";
import "./assets/loading.css";
import "./assets/notfound.css";

// libraries
import Nav from "./templates/nav";
import { Provider } from "react-redux";
import { link, search } from "./store";

// react-router-dom
import { Routes, Route } from "react-router-dom";
import HireMe from "./templates/hireMe";
import Loading from "./templates/loading";

// components
const Home = React.lazy(() => wait(1500).then(() => import("./pages/home")));
const NotFound = React.lazy(() =>
  wait(1500).then(() => import("./pages/notFound"))
);

function wait(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

function App() {
  return (
    <div>
      <React.Suspense fallback={<Loading />}>
        <Provider store={link}>
          <Nav />
        </Provider>
        <div className="main-content" id="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<Home />} />
            <Route path="interest" element={<></>} />
            <Route path="contact" element={<></>} />
            <Route path="experience" element={<></>} />
            <Route
              path="*"
              element={
                <Provider store={link}>
                  <NotFound />
                </Provider>
              }
            />
          </Routes>
          <HireMe />
        </div>
      </React.Suspense>
    </div>
  );
}

export default App;
