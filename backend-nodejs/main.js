

// new Promise((resolve,reject)=>{
//     console.log("object")
//     setTimeout(()=>{
//         document.getElementById("title1").style.visibility = "visible"
//         resolve()
//     },1000)
// }).then(()=>{
//     return new Promise((resolve)=>{
//     setTimeout(()=>{
//         document.getElementById("title2").style.visibility = "visible"
//         resolve()
//     },1000)
//     })
// }).then(()=>{
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             document.getElementById("title3").style.visibility = "visible"
//             resolve()
//         },1000)

//         })
// })

// const get = async () => {
//     console.log("object")
//     setTimeout(() => {
//         document.getElementById("title1").style.visibility = "visible"
//     }, 1000)

//     setTimeout(() => {
//         document.getElementById("title2").style.visibility = "visible"
//     }, 1000)
//     setTimeout(() => {
//         document.getElementById("title3").style.visibility = "visible"
//     }, 1000)
// }

// get()

// const executeFunc  = async ()=>{
//      await new Promise(resolve => console.log("object"))
// }


async function fetchUserData(userId){
   const response = fetch(`https://jsonplaceholder.typicode.com/users`);
   if(!response.ok)
   throw new Error("failed")
   else
   return await response.json()
 
}   

fetchUserData(1)