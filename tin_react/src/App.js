import React from "react";


import {
    BrowserRouter as Router,
    Route, Routes
} from "react-router-dom";


import Header from "./components/fragments/Header";
import Navigation from "./components/fragments/Navigation";
import MainContent from "./components/other/MainContent";
import Footer from "./components/fragments/Footer";




function App() {
  return (
      <Router >
          <div>
                <Header/>
                <Navigation/>
              <Routes>
                  <Route path='/' component={<MainContent/>} />
              </Routes>
              <Footer/>
          </div>
      </Router>

  );
}

export default App;
