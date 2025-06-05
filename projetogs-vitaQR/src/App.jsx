import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import View from "./routes/View";
import Nav from "./components/Nav";

function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-gray-50 text-gray-800">
        <Nav />
        <main className="p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/view" element={<View />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
}

export default App;
