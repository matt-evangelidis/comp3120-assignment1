const findUser = (users, post) => {
    //console.log("Users List:", users)
    //console.log("Post:", post)
    const user = users.find(u => (u.id === post.user))
    //console.log("Found user: ", user)
    return user
}

export default {findUser}