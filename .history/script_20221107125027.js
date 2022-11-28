async function x(j) {
    let i = 0;
    j 
    for(i; i<j; i++) {
        await new Promise((res,rej) => {
            setTimeout(()=>{
                console.log('Взлом: ' + i + '%');
                res(i);     
            },100)
        });
    }
}

x(100).then(()=>console.log('END'));

// const requestURL = 'https://jsonplaceholder.typicode.com/users';


// let a = {y:{y:2}};
// console.log(a);
// let b = a;
// console.log(b);
// let c = b;
// console.log(c);
// let z = {b:c.y};
// console.log(z);
// z.a = 4;
// console.log(z);
// a.y.y = 10;
// console.log(z);



// fetch(requestURL, {
//     method:
//     headers:  {'Content-Type': 'application/json',}
//     body
// });

// fetch(requestURL).then(res => res.json().then(res => console.log(res)));
// async function v() {
//   const a = await fetch(requestURL);
//   console.log(a.text);
// }

// v();
  

// const a = fetch(requestURL).then((data) => data.json())
// console.log(a)

// async function f() {
//     return 1;
//   }

//   f().then(data=>console.log(data));    



// fetch(requestURL).then(res => console.log(res.json()));
// let arr = [1,2,7,5];

// arr = arr.map( el => {
//     return fetch(`https://jsonplaceholder.typicode.com/users/${el}`).then((res) => res.json());
// });

// Promise.allSettled(arr).then((res) => console.log(res));

// new Promise((resolve) => {
//     setTimeout(()=>{
//         const date = Date();
//         resolve(date);
//         console.log(date)
//     },1000);
// })
// .then(date => {
//     return new Promise((resolve)=> {
//         setTimeout(()=> {
//             date = Date();
//             resolve(date);
//             console.log(date);
//         },2000);
//     })
// })
// .then(date => {
    
//         setTimeout(() => {
//         date = Date();
//         console.log(date);
//         },3000)
    
// })
// .then((data)=>{
//     setTimeout(() => {
//         date = Date();
//         console.log(date);
//         },4000)
// })


// GET /user/tj?collor=red