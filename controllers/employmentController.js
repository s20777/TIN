const EmploymentRepository = require('../repository/sequelize/employmentRepository')
const DepartmentRepository = require('../repository/sequelize/departmentRepository')
const EmployeeRepository = require('../repository/sequelize/employeeRepository')



exports.showEmploymentList = (req, res, next) => {
    EmploymentRepository.getEmployments()
        .then(employments => {
            res.render('pages/employment/list', {
                employment: employments,
                pageTitle: 'Lista zatrudnien',
                navLocation : 'employment'});
        })
}


exports.showAddEmploymentForm = (req, res, next) => {
    let allEmps, allDepts;
    EmployeeRepository.getEmployees()
        .then(emps => {
            allEmps = emps;
            return DepartmentRepository.getDepartments();
        })
        .then(depts => {
            allDepts = depts;
            console.log(allEmps, allDepts)
            res.render('pages/employment/form', {
                employment: {},
                allEmps,
                allDepts,
                formMode: 'createNew',
                pageTitle: req.__('emp.form.add.pageTitle'),
                formAction: '/employments/add',
                navLocation : 'employment',
                validationErrors: []
            })
        })
}



exports.showEditEmploymentForm = (req, res, next) => {
    const employmentId = req.params.employmentId;
    let allEmps, allDepts, allEmployments;


    EmploymentRepository.getEmployments()
        .then(employments => {
            allEmployments = employments;
            return EmployeeRepository.getEmployees();
        })
        .then(employees => {
            allEmps = employees;
            return DepartmentRepository.getDepartments();
        })
        .then(depts => {
            allDepts = depts;
            return EmploymentRepository.getEmploymentById(employmentId);
        })
        .then(employment => {
            res.render('pages/employment/form', {
                employment: employment,
                allEmps: allEmps,
                allDepts: allDepts,
                allEmployments: allEmployments,
                formMode: 'edit',
                pageTitle: 'Edycja wypożyczenia',
                btnLabel: 'Edytuj wypożyczenie',
                formAction: '/employments/edit',
                navLocation: 'employment',
                validationErrors: []
            });
        });
}

exports.showEmploymentDetails = (req, res, next) => {
    const employmentId = req.params.employmentId;
    let allEmps, allDepts;

    EmployeeRepository.getEmployees()
        .then(employees => {
            allEmps = employees;
            return DepartmentRepository.getDepartments();
        })
        .then(depts => {
            allDepts = depts;
            return EmploymentRepository.getEmploymentById(employmentId)
        })
        .then(employment => {
            res.render('pages/employment/form', {
                employment: employment,
                allEmps: allEmps,
                allDepts: allDepts,
                formMode: 'showDetails',
                pageTitle: 'Szczegóły zatrudnienia',
                formAction: '',
                navLocation: 'employment',
                validationErrors: []
            });
        });

}

exports.addEmployment = (req, res, next) => {
    const employmentData = { ...req.body };

    EmploymentRepository.createEmployment(employmentData)
        .then(result => {
            res.redirect('/employments');
        })
        .catch(err => {
            let allEmps, allDepts;
            console.log(err)
            EmployeeRepository.getEmployees()
                .then(emps => {
                    allEmps = emps;
                    return DepartmentRepository.getDepartments();
                })
                .then(depts => {
                    allDepts = depts;
                    res.render('pages/employment/form', {
                        employment: {},
                        allEmps,
                        allDepts,
                        pageTitle: 'Dodawanie zatrudnienia',
                        btnLabel: 'Dodaj zatrudnienie',
                        formMode: 'createNew',
                        formAction: '/employments/add',
                        navLocation: 'employment',
                        validationErrors: err.errors
                    })})

                });


};

exports.updateEmployment = (req, res, next) => {
    let allEmps, allDepts, error;
    const employmentId = req.body._id;
    const employmentData = { ...req.body };

    EmploymentRepository.updateEmployment(employmentId, employmentData)
        .then(result => {
            res.redirect('/employments');
        })
        .catch(err => {
            EmployeeRepository.getEmployees()
                .then(emps => {
                    allEmps = emps;
                    return DepartmentRepository.getDepartments();
                })
                .then(depts => {
                    allDepts = depts;
                    res.render('pages/employment/form', {
                        employment: employmentData,
                        allEmps: allEmps,
                        allDepts: allDepts,
                        formMode: 'edit',
                        pageTitle: 'Edycja zatrudnienia',
                        btnLabel: 'Edytuj zatrudnienie',
                        formAction: '/employments/edit',
                        navLocation: 'employment',
                        validationErrors: error.errors
                    })})
                })
};

exports.deleteEmployment = (req, res, next) => {
    const employmentId = req.params.employmentId;

    EmploymentRepository.deleteEmployment(employmentId)
        .then(() => {
            res.redirect('/employments');
        })
        // .catch(err => {
        //     res.render('pages/employment/form', {
        //         employment: employmentData ,
        //         pageTitle: 'Usuwanie zatrudnienia',
        //         formMode: 'delete',
        //         btnLabel: 'Usuń zatrudnienie',
        //         formAction: '/employments/delete',
        //         navLocation: 'employment',
        //         validationErrors: []
        //     })
        // });
};

