function fetchUserData() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve({name: "sachin", url: "https://sachin.com"})
        },3000)
    })
}

async function getUserData() {
    try {
        console.log("fetching user data.....");
        const userData = await fetchUserData();
        console.log("Data fetched successfully");
        console.log(userData)
    } catch (error) {
        console.log(error)
    }
}

getUserData()