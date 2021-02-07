let x1=0
x2=1
next=0
for(let fibo=1;fibo<=17;fibo++){
    if(fibo == 1){
        console.log(x1);
    }
    if(fibo == 2){
        console.log(x2);
    }
    next = x1+x2;
    x1=x2;
    x2=next;
    console.log(next);
}