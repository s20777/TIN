const sequelize = require('./sequelize');

const Employee = require('../../model/sequelize/employee');
const Department = require('../../model/sequelize/department');
const Employment = require('../../model/sequelize/employment');
//
const authUtil = require('../../util/authUtlis');
const passHash = authUtil.hashPassword('12345');

module.exports = () => {
    Employee.hasMany(Employment, {as: 'employments', foreignKey: {name: 'emp_id', allowNull: false}, constraints: true, onDelete: 'CASCADE'});
    Employment.belongsTo(Employee, {as: 'employee', foreignKey: {name: 'emp_id', allowNull: false} } );
    Department.hasMany(Employment, {as: 'employments', foreignKey: {name: 'dept_id', allowNull: false}, constraints: true, onDelete: 'CASCADE'});
    Employment.belongsTo(Department, {as: 'department', foreignKey: {name: 'dept_id', allowNull: false} });

    let allEmps, allDepts;
    return sequelize
        .sync({force: true})
        .then( () => {
            return Employee.findAll();
        })
        .then(emps => {
            if( !emps || emps.length == 0 ) {
                return Employee.bulkCreate([
                    {firstName: 'Ola', lastName: 'Kowalska', email: 'ola.kowalska@gmail.com'},
                    {firstName: 'Basia', lastName: 'Borczyk', email: 'basia.borczyk@gmail.com'},
                    {firstName: 'Zosia', lastName: 'Niemczyk', email: 'zosia.niemczyk@gmail.com'},
                ])
                    .then( () => {
                        return Employee.findAll();
                    });
            } else {
                return emps;
            }
        })
        .then( emps => {
            allEmps = emps;
            return Department.findAll();
        })
        .then( depts => {
            if( !depts || depts.length == 0 ) {
                return Department.bulkCreate([
                    { deptName: 'HR', budget: 100_000},
                    { deptName: 'AUC', budget: 900_000}
                ])
                    .then( () => {
                        return Employee.findAll();
                    });
            } else {
                return depts;
            }
        })
        .then( depts => {
            allDepts = depts;
            return Employment.findAll();
        })
        .then( empls => {
            if( !empls || empls.length == 0 ) {
                return Employment.bulkCreate([
                    {emp_id: allEmps[0]._id, dept_id: allDepts[0]._id, salary: 5000, dateFrom: '2020-01-02', dateTo: '2022-01-06'},
                    {emp_id: allEmps[1]._id, dept_id: allDepts[0]._id, salary: 4000, dateFrom: '2021-07-12', dateTo: '2022-09-06'},
                    {emp_id: allEmps[0]._id, dept_id: allDepts[1]._id, salary: 3000, dateFrom: '2020-12-02', dateTo: null}
                ]);
            } else {
                return empls;
            }
        });
};