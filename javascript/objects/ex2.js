let emp={
    name:'chiru',
    email:'chiru@gmail.com',
    number:9010112345,
    info:()=>{
        console.log("welcome to bangalore");
    }
}
emp.info();
emp.sal=50000;
console.log(emp);
delete emp.number;
console.log(emp);
delete emp.info;
console.log(emp);
emp.sal=70000;
console.log(emp);