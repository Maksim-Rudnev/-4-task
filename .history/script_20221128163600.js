function f1(j) {
    let i = 1;
    j += 1;
    for(i; i<j; i++) {
        await new Promise((res,rej) => {
            setTimeout(()=>{
                console.log('Взлом: ' + i + '%');
                res(i);     
            },100)
        });
    }
}
