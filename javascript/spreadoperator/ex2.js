let user={
    name:"chiru",
    address:"vizag"
}
let client={
    name:"client raju",
    address:"bangalore"
}
let userDetails={
    ...user,
    ...client,
}
console.log(userDetails);