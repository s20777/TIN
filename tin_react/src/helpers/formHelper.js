const formMode = {
    NEW: 'NEW',
    EDIT: 'EDIT'
}

export const formValidationKeys = {
    notEmpty: 'notEmpty',
    len_2_60: 'len_2_60',
    len_5_60: 'len_5_60',
    isEmail: 'isEmail',
}

export function getValidationErrorKeys(error){
    return `validation.${error}`;
}

export default formMode