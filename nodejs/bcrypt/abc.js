const bcrypt = require('bcryptjs');

let user_Login={
    email: "chiru@gmail.com",
    password: "12345",
    cc: 7894456285237564
};
let salt=bcrypt.genSaltSync(10);
newPassword=bcrypt.hashSync(user_Login.password, salt);

let new_Login_Details={...user_Login, password: newPassword};
console.log(new_Login_Details);
if(bcrypt.compareSync(user_Login.password, new_Login_Details.password)){
    console.log("Password Match");
}else{
    console.log("Password Does not Match");
}