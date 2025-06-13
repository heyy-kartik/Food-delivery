import React from "react";
import "./App.css";
import Header from "./Header";
import Body from "./Body";
import About from "./About";
import { ShimmerContentBlock } from "react-shimmer-effects";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./contact";
import Cart from "./Cart";
import ResMenu from "./ResMenu";
import { lazy, Suspense } from "react";

function App() {
  const AboutUs = lazy(() => import("./About"));
  return (
    <>
      <div className="cards">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Body />}></Route>
            <Route
              path="/about"
              element={
                <Suspense fallback={<ShimmerContentBlock />}>
                  <About />
                </Suspense>
              }
            ></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/menu/:resId" element={<ResMenu />}></Route>
            <Route path="/Cart" element={<Cart />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
