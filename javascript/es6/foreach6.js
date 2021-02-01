let products=[{name:'iphone',price:50000,color:'red'},
{name:'samsung',price:9000,color:'blue'},
{name:'nokia',price:5000,color:'white'},
{name:'mi',price:4700,color:'gray'}];

let newMobile_5k=products.map((x)=>{
    if(x.price>=5000) return x;
});
console.log(newMobile_5k);