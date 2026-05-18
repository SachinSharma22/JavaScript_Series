// How to know that the given specific part of js code is either asynchoronus or synchronous
// To know that kindly check that the give code is written in
/**
 * SetTimeOut
 * setInterval
 * Promises
 * fetch
 * axios
 * XMLHTTPRequst
 * are async code
 */
// console.log("One")
// console.log("two")
// setTimeout(() => {
//     console.log("three")
// },2000)
// console.log("four")

let ans = new Promise((res, rej) => {
    if(true){
        return res()
    }else {
        return rej()
    }
})

ans.then(() => {
    console.log("Resolve ho gya tha")
})
.catch(() => {
    console.log("Resolve nhu hua tha")
})

let num = new Promise((res,rej) => {
    let data = Math.floor(Math.random() * 10);
    if(data > 5) {
        return res()
    }else {
        return rej()
    }
})

num
.then(() => {
    console.log("Data is Resolved")
})
.catch(() => {
    console.log("Data is Rejected")
})