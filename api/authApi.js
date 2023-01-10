const EmployeeRepository = require('../repository/sequelize/employeeRepository');
const config = require('../config/auth/key');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.login = (req, res) => {
    console.log(req.body);
    const email = req.body.email;
    const password = req.body.password;
    EmployeeRepository.findByEmail(email)
        .then(user => {
            console.log('user: ', user);
            if(!user){
                return res.status(401).send({ message: "Nieprawidłowy email lub hasło" });
            }

            bcrypt.compare(password, user.password)
                .then(isEqual => {
                    if(!isEqual){
                        return res.status(401).send({ message: "Nieprawidłowy email lub hasło" });
                    }
                    const token = jwt.sign(
                        {
                            email: user.email,
                            userId: user._id,
                        },
                        config.secret,
                        { expiresIn: '1h' }
                    )
                    res.status(200).json({token: token, userId: user._id})
                })
                .catch(err => {
                    console.log(err);
                    res.status(501)
                })
        })
}