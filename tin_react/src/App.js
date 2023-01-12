import React, {useEffect, useState} from "react";

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
import {getCurrentUser} from "./helpers/authHelper";
import LoginForm from "./components/other/LoginForm";
import ProtectedRoute from "./other/ProtectedRoute";


function App() {

    const [user, setUser] = useState(null);
    const [prevPath, setPrevPath] = useState(null);


    const handleLogin = (user) => {
        console.log(user);
        localStorage.setItem("user", user);
        setUser(user);
        window.location.href = '/';
    };

    const handleLogout = () => {
        localStorage.removeItem("user");
        setUser(null);
        window.location.href = '/';
    };

    useEffect(() => {
        const currentUser = getCurrentUser();
        setUser(currentUser);
    }, [])

  return (
      <Router >
          <div>
                <Header/>
              <Navigation handleLogout={handleLogout}/>
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
                  <Route exact path='/departments/details/:deptId' component={DepartmentDetails} />
                  <ProtectedRoute exact={true} path="/employments" component={EmploymentList} />
                  <Route exact path='/employments/details/:employmentId' component={EmploymentDetails} />
                  <Route exact path='/employments/add' component={EmploymentForm} />
                  <Route exact path='/employments/edit/:employmentId' component={EmploymentForm} />
                  <Route exact path="/login" render={(props) => <LoginForm {...props} handleLogin={handleLogin} />} />



                  </Switch>
              </Route>
              <Footer/>
          </div>
      </Router>

  );
}

export default App;
