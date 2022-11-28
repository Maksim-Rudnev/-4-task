function f() {
    let i = 999, j = 999;
    let arr=[];
    let arr1 = [];
    let multi;
    while(i!=100){
        if(j===100){
            j = 999;
            --i;
        }
        multi = String(i * j/1000);
        if(multi.includes('.')){
            const arr = multi.split('.');
            arr[1] =  arr[1].split('').reverse().join('');
            if(arr[0]===arr[1]){
            arr1.push(multi*1000);
        }
        }
        --j;
    }
    arr1.sort((a,b) => b-a);
    console.log(arr1[0]);
}
f();