function f1() {
    let i = 999, j = 999;
    let arr=[];
    while(true){
        const multi = String(i * j/100);
        const arr = multi.split('')
    }
}

let m = String(91*99/100);
let arr = m.split('.')
arr[1] =  arr[1].split('').reverse().join('');
console.log(m);
console.log(arr);
if(arr[0]===arr[1])console.log(true);