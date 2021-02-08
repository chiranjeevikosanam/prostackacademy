class OrderDetails{
    orderdetails = () =>{
        console.log("this is parent");
    };
}
class OrderStatus extends OrderDetails{
    orderdetails = () =>{
        console.log("this is child");
    };
}
let a = new OrderStatus();
console.log(a);
console.log(a.orderdetails);