import React from "react";
import Login from "./components/Login";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Register from "./components/Register";
import Reset from "./components/Reset";
import Dashboard from "./components/Dashboard";
function App() {
      return (
            <div>
                  <Router>
                        <Routes>
                              <Route path='/' element={<Login />} />
                              <Route path='/register' element={<Register />} />
                              <Route path='/reset' element={<Reset />} />
                              <Route
                                    path='/dashboard'
                                    element={<Dashboard />}
                              />
                        </Routes>
                  </Router>
            </div>
      );
}
export default App;
