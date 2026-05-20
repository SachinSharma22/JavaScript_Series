function fetchPostData () {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("Post data fetched")
        },2000)
    })
}

function fetchCommentData () {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("Comment data fetched")
        },3000)
    })
}

async function getBlogdata() {
    try {
        console.log("fetching blog data .....");
        // const postData = await fetchPostData();
        // const commentData = await fetchCommentData();
        // better way to handle multiple promises
        const [postData, commentData] = await Promise.all([fetchPostData(), fetchCommentData()])
        console.log(postData)
        console.log(commentData)
        console.log("fetch complete")
    } catch (error) {
        console.error("Error fetching Blog data", error)
    }
}

getBlogdata();