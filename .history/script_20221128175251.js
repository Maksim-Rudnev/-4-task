function f1() {
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
            console.log(multi);
            arr[1] =  arr[1].split('').reverse().join('');
            if(arr[0]===arr[1]){
            arr.push(multi*1000);
        }
        }
        --j;
    }
    console.log();
}

f1();