function somar(a,b){
    console.log(a + b);
}

somar(1,2);

function subtracao(a, b = 1){
    return a - b;
}
subtracao(2);

console.log(subtracao(2,1));