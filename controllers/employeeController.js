const EmployeeRepository = require('../repository/sequelize/employeeRepository')


exports.showEmployeeList = (req, res, next) => {
    EmployeeRepository.getEmployees()
        .then(emps => {
            res.render('pages/employee/list', {
                emps: emps,
                navLocation: "emp"});
        })

}

exports.showEmployeeForm = (req, res, next) => {
    res.render('pages/employee/form', {
        navLocation: 'emp',
        user: {},
        pageTitle: 'Nowy pracownik',
        formMode: 'createNew',
        btnLabel: 'Dodaj pracownika',
        formAction: '/emp/add',
        validationErrors: []
    });
}

exports.showEmployeeDetails = (req, res, next) => {
    res.render('pages/employee/details', {navLocation: "emp"});
}

exports.showEmployeeEdit = (req, res, next) => {
    res.render('pages/employee/form-edit', {navLocation: "emp"});
}
