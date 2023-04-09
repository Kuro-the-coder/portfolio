import React from "react";

// css
import "./App.css";
import "./assets/nav.css";
import "./assets/loading.css";
import "./assets/notfound.css";

// libraries
import Nav from "./templates/nav";
import { Provider } from "react-redux";
import { link } from "./store";

// react-router-dom
import { Routes, Route } from "react-router-dom";
import HireMe from "./templates/hireMe";
import Loading from "./templates/loading";
import Contact from "./pages/contact";

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
      <Provider store={link}>
        <Nav />
      </Provider>
      <React.Suspense fallback={<Loading />}>
        <div className="main-content" id="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<Home />} />
            <Route path="interest" element={<></>} />
            <Route path="contact" element={<Contact />} />
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
