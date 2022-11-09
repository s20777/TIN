exports.showEmploymentList = (req, res, next) => {
    res.render('pages/employment/list', { navLocation : 'employment'});
}

exports.showEmploymentForm = (req, res, next) => {
    res.render('pages/employment/form', {
        navLocation: 'employment',
        user: {},
        pageTitle: 'Nowe zatrudnienie',
        formMode: 'createNew',
        btnLabel: 'Dodaj zatrudnienie',
        formAction: '/employment/add',
        validationErrors: []
    });
}

exports.showEmploymentDetails = (req, res, next) => {
    res.render('pages/employment/list-details', {});
}


