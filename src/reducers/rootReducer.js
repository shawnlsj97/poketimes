const initState = {
    posts: [
        {id: '1', title: 'Squirtle Laid an Egg', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta modi vitae incidunt voluptate optio enim provident voluptatem, velit in earum quis sunt praesentium debitis quod sed saepe, laboriosam quasi. Voluptatum.'},
        {id: '2', title: 'Charmander Laid an Egg', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta modi vitae incidunt voluptate optio enim provident voluptatem, velit in earum quis sunt praesentium debitis quod sed saepe, laboriosam quasi. Voluptatum.'},
        {id: '3', title: 'A Helix Fossil was Found', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta modi vitae incidunt voluptate optio enim provident voluptatem, velit in earum quis sunt praesentium debitis quod sed saepe, laboriosam quasi. Voluptatum.'}
    ]
}

const rootReducer = (state = initState, action) => {
    if (action.type === 'DELETE_POST') {
        let newPosts = state.posts.filter(post => {
            return action.id !== post.id
        })
        return {
            ...state,
            posts: newPosts
        }
    }
    return state;
}

export default rootReducer;