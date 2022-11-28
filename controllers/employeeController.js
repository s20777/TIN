const EmployeeRepository = require('../repository/sequelize/employeeRepository')


exports.showEmployeeList = (req, res, next) => {
    EmployeeRepository.getEmployees()
        .then(emps => {
            res.render('pages/employee/list', {
                emps: emps,
                navLocation: "emp"});
        })

}

exports.showAddEmployeeForm = (req, res, next) => {
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

exports.showEditEmployeeForm = (req, res, next) => {
    const empId = req.params.empId;

    EmployeeRepository.getEmployeeById(empId)
        .then(emp => {
            res.render('pages/employee/form', {
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
            res.render('pages/employee/form', {
                emp: emp,
                formMode: 'showDetails',
                pageTitle: 'Szczegóły pracownik',
                formAction: '',
                navLocation: 'emp'
            })})
}

exports.addEmployee = (req, res, next) => {
    const empData = {...req.body};
    EmployeeRepository.createEmployee(empData)
        .then(result => {
            res.redirect('/employees')
        })
        .catch(err => {
        res.render('pages/employee/form', {
            emp: empData,
            pageTitle: 'Nowy pracownik',
            formMode: 'createNew',
            btnLabel: 'Dodaj pracownika',
            formAction: '/employees/add',
            navLocation: 'emp',
            validationErrors: err.errors
        })})
};

exports.updateEmployee = (req, res, next) => {
    const empId = req.body._id;
    const empData = {...req.body};

    EmployeeRepository.updateEmployee(empId, empData)
        .then(result => {
            res.redirect('/employees')
        })

};

exports.deleteEmployee = (req, res, next) => {
    const empId = req.body._id;
    EmployeeRepository.deleteEmployee(empId)
        .then(result => {
            res.redirect('/employees')
        })
};
