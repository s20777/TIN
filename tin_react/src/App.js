import React from "react";

import {
    BrowserRouter as Router,
    Route, Routes, Switch
} from "react-router-dom";

import Header from "./components/fragments/Header";
import Navigation from "./components/fragments/Navigation";
import MainContent from "./components/other/MainContent";
import Footer from "./components/fragments/Footer";
import EmployeeList from "./components/employee/EmployeeList";
import EmployeeDetails from "./components/employee/EmployeeDetails";

import EmploymentDetails from "./components/employment/ EmploymentDetails";
import EmploymentForm from "./components/employment/EmploymentForm";
import EmploymentList from "./components/employment/EmploymentList";
import DepartmentList from "./components/department/DepartmentList";
import DepartmentDetails from "./components/department/DepartmentDetails";
import EmployeeForm from "./components/employee/EmployeeForm";
import DepartmentForm from "./components/department/DepartmentForm";


function App() {
  return (
      <Router >
          <div>
                <Header/>
                <Navigation/>
              <Route>
                  <Switch>
                  <Route exact path="/" component={MainContent} />
                  <Route exact path='/employees' component={EmployeeList} />
                  <Route exact path='/employees/details/:empId' component={EmployeeDetails} />
                  <Route exact path='/employees/add' component={EmployeeForm} />
                  <Route exact path='/employees/edit/:empId' component={EmployeeForm} />
                  <Route exact path='/departments' component={DepartmentList} />
                  <Route exact path='/departments/add' component={DepartmentForm} />
                  <Route exact path='/departments/edit/:deptId' component={DepartmentForm} />



                      <Route exact path='/employments' component={EmploymentList} />
                  <Route exact path='/employments/details/:employmentId' component={EmploymentDetails} />
                  <Route exact path='/employments/add' component={EmploymentForm} />
                  <Route exact path='/employments/edit/:employmentId' component={EmploymentForm} />



                  </Switch>
              </Route>
              <Footer/>
          </div>
      </Router>

  );
}

export default App;
