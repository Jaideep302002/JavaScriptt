

const promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
       console.log("Async task completed");
    },1000)
    resolve()
})

promiseOne.then(function(){
    console.log("Async task resolved")
})

// second way

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async Task 2 completed")
    },1000)
    resolve()
}).then(function(){
    console.log("Async Task 2 resolved")
})


// third way
// then ka direct relation hota hain apna resolve 

const promiseThree  = new Promise(function(resolve,reject){
    setTimeout(function(){
       resolve({username:"Jaideep Singh", email:"singh@gmail.com"})
    },1000)
})

promiseThree.then(function(user){
  console.log(user)
})

// fourth way

 const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
           let error = false
           if(!error){
            resolve({username:"Jaideep", password:"123"})
           }else{
            reject("ERROR: Something went wrong")
           }
    },1000)
 })

 promiseFour.
 then((user) => {
    console.log(user);
    return user.password
 }).
 then((password) => {
   console.log(password)
 }).
 catch(function(error){
    console.log(error);
 }).finally(() => {
    console.log("the Promise is either resollved or rejected")
 })

 // fifth way
