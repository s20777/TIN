exports.showEmployeeList = (req, res, next) => {
    res.render('pages/employee/list', {navLocation : "emp"});
}

exports.showEmployeeForm = (req, res, next) => {
    res.render('pages/employee/form', {});
}

exports.showEmployeeDetails = (req, res, next) => {
    res.render('pages/employee/details', {});
}
