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
        pageTitle: req.__('emp.form.add.pageTitle'),
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
                navLocation: 'emp',
                validationErrors: []
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
                navLocation: 'emp',
                validationErrors: []
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
    let error;


    EmployeeRepository.updateEmployee(empId, empData)
        .then(result => {
            res.redirect('/employees')
        })
        .catch(err => {
            error = err;
            return EmployeeRepository.getEmployeeById(empId)
        })
        .catch(err => {
            res.render('pages/employee/form', {
                emp: empData,
                pageTitle: 'Edycja pracownik',
                formMode: 'edit',
                btnLabel: 'Edycja pracownika',
                formAction: '/employees/edit',
                navLocation: 'emp',
                validationErrors: err.errors
            })})

};

exports.deleteEmployee = (req, res, next) => {
    const empId = req.params.empId;
    const empData = { ...req.body }

    EmployeeRepository.deleteEmployee(empId)
        .then(result => {
            res.redirect('/employees')
        })
        .catch(err => {
            res.render('pages/employee/form', {
                emp: empData,
                formMode: 'delete',
                pageTitle: 'Usuwanie pracownika',
                btnLabel: 'Usuń pracownika',
                formAction: '/employees/delete',
                navLocation: 'emp',
                validationErrors: err.errors
            })
        });
};
