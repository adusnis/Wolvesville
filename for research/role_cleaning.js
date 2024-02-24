const roles = require('C:/Users/maewa/Programming/Wolvesville/wov/roleOnly.json');
rolesList = []
for (let i in roles) {
    let role = roles[i].id
    role = role.replace('-', '_')
    rolesList.push(role)
}
console.log(rolesList)