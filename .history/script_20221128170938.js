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
        console.log(multi);
        const arr = multi.split('.');
        console.log(arr);
        arr[1] =  arr[1].split('').reverse().join('');
        if(arr[0]===arr[1]){
            console.log(multi*1000);
            break;
        }
        --j;
    }
    console.log(multi*1000);
}

f1();