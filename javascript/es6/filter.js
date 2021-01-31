var age=[17,18,23,28,35,45];

function checkAdult(age){
    return age>=18;
}
console.log(age.filter(checkAdult));