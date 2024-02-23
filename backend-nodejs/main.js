


async function fetchUserData(userId){
   const response = fetch(`https://jsonplaceholder.typicode.com/users`);
   if(!response.ok)
   throw new Error("failed")
   else
   return await response.json()
 
}   

fetchUserData(1)