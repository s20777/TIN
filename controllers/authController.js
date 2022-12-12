const EmployeeRepository = require('../repository/sequelize/employeeRepository');
const authUtils = require("../util/authUtlis");


exports.login = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    EmployeeRepository.findByEmail(email)
        .then(emp => {
            if(!emp) {
                res.render('index', {
                    navLocation: '',
                    loginError: 'Niepoprawny adres email lub hasło'
                });
            } else if(password == emp.password) {
                req.session.loggedUser = emp;
                res.redirect('/');

            } else if(authUtils.comparePasswords(password, emp.password)) {
                req.session.loggedUser = emp;
                console.log('user logged', emp);
                res.redirect('/');
            } else {
                res.render('index', {
                    navLocation: '',
                    loginError: 'Niepoprawny adres email lub hasło'
                })
            }

        })
        .catch(err => {
            console.log(err)
        })
}

exports.logout = (req, res, next) => {
    req.session.loggedUser = undefined;
    res.redirect('/');
}