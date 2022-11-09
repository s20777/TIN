exports.showDepartmentList = (req, res, next) => {
    res.render('pages/department/list', { navLocation : "dept"});
}

exports.showDepartmentForm = (req, res, next) => {
    res.render('pages/department/form');
}

exports.showDepartmentDetails = (req, res, next) => {
    res.render('pages/employment/list', {});
}
