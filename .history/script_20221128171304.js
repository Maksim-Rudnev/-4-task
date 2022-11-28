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
        if(multi.includes('.')){

        }
        
        --j;
    }
}

f1();