class bankbal{
    minbal = 500;
    constructor(){
        console.log("hello");
    }
}
class bankdetails extends bankbal{
    constructor(name,id,mobile,email){
        super();
        this.name = name;
        this.id = id;
        this.mobile = mobile;
        this.email = email;
    }
}
let x = new bankdetails("chiru",101,1234567890,"chiru@kk.com");
console.log(x);


