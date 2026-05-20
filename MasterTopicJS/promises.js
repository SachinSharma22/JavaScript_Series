function fetchData() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            let success = true;
            if(success) {
                resolve("Data fetched successfully");
            } else {
                reject("Server rejected your request");
            }
        },2000)
    })
}

fetchData()
.then((data) => {
    console.log(data);
    return data.toLowerCase();
})
.then((val) => {
    console.log(val);
})
.catch((error) => {
    console.log(error);
})