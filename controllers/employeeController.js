const EmployeeRepository = require('../repository/sequelize/employeeRepository')


exports.showEmployeeList = (req, res, next) => {
    EmployeeRepository.getEmployees()
        .then(emps => {
            res.render('pages/employee/list', {
                emps: emps,
                navLocation: "emp"});
        })

}

exports.showEmployeeFormNew = (req, res, next) => {
    res.render('pages/employee/form', {
        navLocation: 'emp',
        emp: {},
        pageTitle: 'Nowy pracownik',
        formMode: 'createNew',
        btnLabel: 'Dodaj pracownika',
        formAction: '/employees/add',
        validationErrors: []
    });
}

exports.showEmployeeEdit = (req, res, next) => {
    const empId = req.params.empId;

    EmployeeRepository.getEmployeeById(empId)
        .then(emp => {
            res.render('pages/employee/form-edit', {
                emp: emp,
                formMode: 'edit',
                pageTitle: 'Edycja pracownik',
                btnLabel: 'Edytuj pracownika',
                formAction: '/employees/edit',
                navLocation: 'emp'
            })})
}

exports.showEmployeeDetails = (req, res, next) => {
    const empId = req.params.empId;

    EmployeeRepository.getEmployeeById(empId)
        .then(emp => {
            res.render('pages/employee/details', {
                emp: emp,
                formMode: 'showDetails',
                pageTitle: 'Szczegóły pracownik',
                formAction: '',
                navLocation: 'emp'
            })})
}

// exports.showEmployeeEdit = (req, res, next) => {
//     res.render('pages/employee/form-edit', {navLocation: "emp"});
// }
