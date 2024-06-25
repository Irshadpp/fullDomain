function mul(x,y){
    return x*y;
}

const mulByTwo = mul.bind(this, 2);
console.log(mulByTwo(5))