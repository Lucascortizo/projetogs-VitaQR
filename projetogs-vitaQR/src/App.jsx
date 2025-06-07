import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import View from "./routes/View";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col">
        <Nav />
        <main className="p-4 flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/view" element={<View />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
