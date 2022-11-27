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
            res.render('pages/employment/form', {
                employment: {},
                allEmps: allEmps,
                allDepts: allDepts,
                formMode: 'createNew',
                pageTitle: 'Lista zatrudnien',
                formAction: 'employments/add',
                navLocation : 'employment'
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

