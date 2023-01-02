import React from "react";

import {
    BrowserRouter as Router,
    Route, Routes
} from "react-router-dom";

import Header from "./components/fragments/Header";
import Navigation from "./components/fragments/Navigation";
import MainContent from "./components/other/MainContent";
import Footer from "./components/fragments/Footer";
import EmployeeList from "./components/employee/EmployeeList";
import EmployeeDetails from "./components/employee/EmployeeDetails";


function App() {
  return (
      <Router >
          <div>
                <Header/>
                <Navigation/>
              <Routes>
                  <Route exact path="/" element={<MainContent />} />
                  <Route exact path='/employees' element={<EmployeeList/>} />
                  <Route exact path='/employees/details/:empId' element={<EmployeeDetails/>} />

              </Routes>
              <Footer/>
          </div>
      </Router>

  );
}

export default App;
