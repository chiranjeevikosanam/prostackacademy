class customer{
    bank_name='SBI';
    constructor(name,mobile,email){
        this.customer_name = name;
        this.customer_mobile = mobile;
        this.customer_email = email;
    }
}
let x = new customer("chiru",9010101010,"chiru@gmail.com");
console.log(x);