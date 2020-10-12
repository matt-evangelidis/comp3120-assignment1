const findUser = (users, post) => {
    //console.log("FindUserFn Users:", users)
    //console.log("FindUsersFn Post:", post)
    const user = users.find(u => (u.id === post.user))
    //console.log("Found user: ", user)
    return user
}

const processContent = (users, post) => {
    const usernames = users.map(u => u.username)

    const content = post.content

    for (let i = 0; i <usernames.length; i++) {
        content.match("@"+usernames[i])
    }
}

export default {findUser}