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
                navLocation: 'dept'
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
                navLocation: 'dept'
            })})
}