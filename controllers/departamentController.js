exports.showDepartmentList = (req, res, next) => {
    res.render('pages/department/list', { navLocation : "dept"});
}

exports.showDepartmentForm = (req, res, next) => {
    res.render('pages/department/form', {
        navLocation: 'dept',
        user: {},
        pageTitle: 'Nowy departament',
        formMode: 'createNew',
        btnLabel: 'Dodaj departament',
        formAction: '/dept/add',
        validationErrors: []
    });
}

exports.showDepartmentDetails = (req, res, next) => {
    res.render('pages/department/details', {navLocation : "dept"});
}

exports.showDepartmentEdit = (req, res, next) => {
    res.render('pages/department/form-edit', {navLocation : "dept"});
}