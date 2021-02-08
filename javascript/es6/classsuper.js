class Bankrules{
    constructor(minBal){
        this.minBal = minBal;
    }
}
class Bankcustomer extends Bankrules{
    constructor(Num,name,minBal){
        super(minBal);
        this.Num = Num;
        this.name = name;
    }
}
let c = new Bankcustomer(101,"chiru",500);
console.log(c);
