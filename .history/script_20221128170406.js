function f1() {
    let i = 999, j = 999;
    let arr=[];
    while(true){
        if(j===100){
            j = 999;
            
        }
        const multi = String(i * j/1000);
        const arr = multi.split('.');
        arr[1] =  arr[1].split('').reverse().join('');
        if(arr[0]===arr[1])break;
        --j;
    }
    console.log(multi*1000);
}

let m = String(91*99/100);
let arr = m.split('.')
arr[1] =  arr[1].split('').reverse().join('');
console.log(m);
console.log(arr);
if(arr[0]===arr[1])console.log(true);