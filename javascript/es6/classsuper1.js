class Bankrules{
    rules(){
        console.log("hello");
    }
}
class Bankcustomer extends Bankrules{
    constructor(Numberr,name,mobileNo){
        super();
        this.Numberr = Numberr;
        this.name = name;
        this.mobileNo = mobileNo;
    }
    getInfo(){
        console.log("your Numberr:",this.Numberr,"your Acc_name:",this.name,"your mobileNo:",this.mobileNo);
    }
}
let c = new Bankcustomer(102,"chiru",9010203040);
console.log(c);
console.log(c.getInfo());
console.log(c.rules);