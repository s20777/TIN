const DepartmentRepository = require('../repository/sequelize/departmentRepository')

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

    DepartmentRepository.updateDepartment(deptId, deptData)
        .then(result => {
            res.redirect('/departments')
        })
        .catch(dept => {
            res.render('pages/department/form', {
                dept: dept,
                pageTitle: 'Edytcja departamentu',
                formMode: 'edit',
                btnLabel: 'Edytuj departament',
                formAction: '/departments/edit',
                navLocation: 'dept',
                validationErrors: error.errors
        })})

};

exports.deleteDepartment = (req, res, next) => {
    const deptId = req.body.deptId;

    DepartmentRepository.deleteDepartment(deptId)
        .then( () => {
            res.redirect('/departments');
        })
};
