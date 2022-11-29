// function f() {
//     let i = 999, j = 999;
//     let arr=[];
//     let arr1 = [];
//     let multi;
//     while(i!=100){
//         if(j===100){
//             j = 999;
//             --i;
//         }
//         multi = String(i * j/1000);
//         if(multi.includes('.')){
//             const arr = multi.split('.');
//             arr[1] =  arr[1].split('').reverse().join('');
//             if(arr[0]===arr[1]){
//             arr1.push(multi*1000);
//         }
//         }
//         --j;
//     }
//     arr1.sort((a,b) => b-a);
//     console.log(arr1[0]);
// }
// f();
console.time('Time');
let i = 999, j = 999;
let stop = 900;
let result = 0;

while(i != stop) {
    if((i * j) % 10) {
    const multi = String(i * j/1000);
    const arr = multi.split('.');
    arr[1] = arr[1].split('').reverse().join('');
    if(arr[0] === arr[1]) {
        if(multi * 1000 > result) {
            result = multi * 1000;
            stop = j;
        }
    --i;
        j = i;
    }
    }
    if(j === stop) {
        --i;
        j = i;
    }
--j;
}
console.log(result);
console.timeEnd('Time');