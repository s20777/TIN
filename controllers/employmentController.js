exports.showEmploymentList = (req, res, next) => {
    res.render('pages/employment/list', { navLocation : 'employment'});
}

exports.showEmploymentForm = (req, res, next) => {
    res.render('pages/employment/form', {});
}

exports.showEmploymentDetails = (req, res, next) => {
    res.render('pages/employment/list-details', {});
}


