const bcrypt = require("bcryptjs");
let user = {
    username:"chiru",
    password:"123@123"
};
let salt = bcrypt.genSaltSync(12);
let newPassword = bcrypt.hashSync(user.password,salt);
console.log(newPassword);

let newUser = {
    ...user,
    password: newPassword,
};
console.log(newUser);
