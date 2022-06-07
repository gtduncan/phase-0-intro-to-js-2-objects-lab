const employee = {
    name : "George",
    streetAddress : "1208 West 25th"
}

function updateEmployeeWithKeyAndValue(employee, key, value)
{
    const newObject = {...employee}
    newObject[key] = value;
    return newObject;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value)
{
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key)
{
    const newEmployee = {...employee}
    delete newEmployee[key];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key)
{
    delete employee[key];
    return employee;
}