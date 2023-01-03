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
import EmploymentList from "./components/employment/EmploymentList";
import EmploymentDetails from "./components/employment/ EmploymentDetails";
import EmployeeForm from "./components/employee/EmployeeForm";
import EmploymentForm from "./components/employment/EmploymentForm";


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
                  <Route exact path='/employees/add' element={<EmployeeForm/>} />
                  <Route exact path='/employees/edit/:empId' element={<EmployeeForm/>} />

                  <Route exact path='/employments' element={<EmploymentList/>} />
                  <Route exact path='/employments/details/:employmentId' element={<EmploymentDetails/>} />
                  <Route exact path='/employments/add' element={<EmploymentForm/>} />
                  <Route exact path='/employments/edit/:employmentId' element={<EmploymentForm/>} />




              </Routes>
              <Footer/>
          </div>
      </Router>

  );
}

export default App;
