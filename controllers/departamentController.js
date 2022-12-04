const DepartmentRepository = require('../repository/sequelize/departmentRepository')
const EmployeeRepository = require("../repository/sequelize/employeeRepository");

exports.showDepartmentList = (req, res, next) => {
    DepartmentRepository.getDepartments()
        .then(depts => {
            res.render('pages/department/list', {
                depts: depts,
                navLocation : "dept"});
        })

}

exports.showAddDepartmentForm = (req, res, next) => {
    res.render('pages/department/form', {
        navLocation: 'dept',
        dept: {},
        pageTitle: 'Nowy departament',
        formMode: 'createNew',
        btnLabel: 'Dodaj departament',
        formAction: '/departments/add',
        validationErrors: []
    });
}

exports.showEditDepartmentForm = (req, res, next) => {
    const deptId = req.params.deptId;

    DepartmentRepository.getDepartmentById(deptId)
        .then(dept => {
            res.render('pages/department/form', {
                dept: dept,
                formMode: 'edit',
                pageTitle: 'Edycja departamentu',
                btnLabel: 'Edytuj departament',
                formAction: '/departments/edit',
                navLocation: 'dept',
                validationErrors: []
            })})
}

exports.showDepartmentDetails = (req, res, next) => {
    const deptId = req.params.deptId;

    DepartmentRepository.getDepartmentById(deptId)
        .then(dept => {
            res.render('pages/department/form', {
                dept: dept,
                formMode: 'showDetails',
                pageTitle: 'Szczegóły departamentu',
                formAction: '',
                navLocation: 'dept',
                validationErrors: []
            })})
}


exports.addDepartment = (req, res, next) => {
    const deptData = {...req.body};
    DepartmentRepository.createDepartment(deptData)
        .then(result => {
            res.redirect('/departments')
        })
        .catch(err => {
            res.render('pages/department/form', {
                dept: deptData,
                pageTitle: 'Nowy departament',
                formMode: 'createNew',
                btnLabel: 'Dodaj departament',
                formAction: '/departments/add',
                navLocation: 'dept',
                validationErrors: err.errors
            })})
};

exports.updateDepartment = (req, res, next) => {
    const deptId = req.body._id;
    const deptData = {...req.body};
    let error;

    console.log("deptData sprawdz: ", deptData);
    //{ _id: '2', deptName: '123', budget: '900000.00' }
    DepartmentRepository.updateDepartment(deptId, deptData
    )
        .then(result => {
            res.redirect('/departments')
        })
        .catch(err => {
            error = err;
            return DepartmentRepository.getDepartmentById(deptId)
        })
        .catch(err => {
            res.render('pages/department/form', {
                dept: deptData,
                pageTitle: 'Edycja departamentu',
                formMode: 'edit',
                btnLabel: 'Edycja departamentu',
                formAction: '/departments/edit',
                navLocation: 'dept',
                validationErrors: err.errors
            })})

};

exports.deleteDepartment = (req, res, next) => {
    const deptId = req.params.deptId;

    DepartmentRepository.deleteDepartment(deptId)
        .then( () => {
            res.redirect('/departments');
        })
        .catch(err => {
            res.render('pages/department/form', {
                dept: deptData,
                formMode: 'delete',
                pageTitle: 'Usuwanie departamentu',
                btnLabel: 'Usuń departament',
                formAction: '/employees/delete',
                navLocation: 'emp',
                validationErrors: err.errors
            })
        });
};
