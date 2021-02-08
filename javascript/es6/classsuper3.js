class Bal{
    minBal = 500;
    getBal(){
        console.log("min bal amount is:",this.minBal);
        return "";
    }
}
let a = new Bal();
console.log(a);
console.log(a.getBal());