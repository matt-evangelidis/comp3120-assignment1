const findUser = (users, post) => {
    const user = users.find(u => (u.id === post.user))
    console.log("Found user: ", user)
    return user
}

// const userPost = (user, posts) => {
//     const array = posts.filter(p => user.id === p.user)

//     const object = {
//       user: user,
//       posts: array
//     }

//     return object
// }

export default {findUser}