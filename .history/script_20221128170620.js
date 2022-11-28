function f1() {
    let i = 999, j = 999;
    let arr=[];
    let multi;
    while(i!=100){
        if(j===100){
            j = 999;
            --i;
        }
        multi = String(i * j/1000);
        const arr = multi.split('.');
        arr[1] =  arr[1].split('').reverse().join('');
        if(arr[0]===arr[1])break;
        --j;
    }
    console.log(multi*1000);
}

