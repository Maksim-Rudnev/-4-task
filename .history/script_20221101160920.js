const requestURL = 'https://jsonplaceholder.typicode.com/users';

// fetch(requestURL, {
//     method:
//     headers:  {'Content-Type': 'application/json',}
//     body
// });

// fetch(requestURL).then(res => res.json().then(res => console.log(res)));
async function v() {
  const a = (await fetch(requestURL);
  console.log(a);
}

v();
  

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