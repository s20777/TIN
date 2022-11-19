const EmploymentRepository = require('../repository/sequelize/employmentRepository');

exports.getEmployments = (req, res, next) => {
    EmploymentRepository.getEmployments()
        .then(employments => {
            res.status(200).json(employments);
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getEmploymentById = (req, res, next) => {
    const employmentId = req.params.employmentId;

    EmploymentRepository.getEmploymentById(employmentId)
        .then(employment => {
            if (!employment) {
                res.status(404).json({
                    message: 'Employment with id: ' + employmentId + ' not found'
                })
            } else {
                res.status(200).json(employment);
            }
        });
};

exports.createEmployment = (req, res, next) => {
    EmploymentRepository.createEmployment(req.body)
        .then(newObj => {
            res.status(201).json(newObj);
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};

exports.updateEmployment = (req, res, next) => {
    const employmentId = req.params.employmentId;

    EmploymentRepository.updateEmployment(employmentId, req.body)
        .then(result => {
            res.status(200).json({ message: 'Employment updated!', employment: result });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });

};

exports.deleteEmployment = (req, res, next) => {
    const employmentId = req.params.employmentId;

    EmploymentRepository.deleteEmployment(employmentId)
        .then(result => {
            res.status(200).json({ message: 'Removed employment', employment: result });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};