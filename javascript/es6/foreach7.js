let products=[{name:'iphone',price:50000,color:'red'},
{name:'samsung',price:9000,color:'blue'},
{name:'nokia',price:5000,color:'white'},
{name:'mi',price:4700,color:'gray'}];

let x=products.forEach((product)=>{
    if(product.color==="red" || product.color==="gray") return product;
});
console.log(x);