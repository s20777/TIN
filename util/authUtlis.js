const bcrypt = require('bcryptjs');

const salt = bcrypt.genSaltSync(8);

exports.hashPassword = (passPlan) => {
    const passHashed = bcrypt.hashSync(passPlan, salt);
    return passHashed;
}

exports.comparePasswords = (passPlan, passHash) => {
    const res = bcrypt.compareSync(passPlan, passHash);
    return res;
}