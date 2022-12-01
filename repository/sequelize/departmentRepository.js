const Employee = require("../../model/sequelize/employee");
const Employment = require("../../model/sequelize/employment");
const Department = require("../../model/sequelize/department");
const {where} = require("sequelize");

exports.getDepartments = () => {
    return Department.findAll();
};

exports.getDepartmentById = (deptId) => {
    return Department.findByPk(deptId,
        {
            include: [{
                model: Employment,
                as: 'employments',
                include: [{
                    model: Employee,
                    as: 'employee'
                }]
            }]
        });
};

exports.createDepartment = (newDeptData) => {
    return Department.create({
        deptName: newDeptData.deptName,
        budget: newDeptData.budget
    });
};

exports.updateDepartment = (deptId, deptData) => {
    const deptName = deptData.deptName;
    const budget = deptData.budget;
    return Department.update(deptData, {where: {_id: deptId }});
};

exports.deleteDepartment = (deptId) => {
    return Department.destroy({
        where: { _id: deptId }
    });

};