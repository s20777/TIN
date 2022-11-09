exports.showEmployeeList = (req, res, next) => {
    res.render('pages/employee/list', {navLocation : "emp"});
}

exports.showEmployeeForm = (req, res, next) => {
    res.render('pages/employee/form', {
        navLocation: 'emp',
        user: {},
        pageTitle: 'Nowy użytkownik',
        formMode: 'createNew',
        btnLabel: 'Dodaj użytkownika',
        formAction: '/emp/add',
        validationErrors: []
    });
}

exports.showEmployeeDetails = (req, res, next) => {
    res.render('pages/employee/details', {});
}
