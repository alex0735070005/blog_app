const initialState = {
    name: 'vasa',
    lastPosts: [],
}

export default (state = initialState, action) => {

    console.log('RUN HOME REDUCER', action)

    switch (action.type) {
        case 'SET_LAST_POSTS':
            return {
                ...state,
                lastPosts: action.posts,
            }
    
        default: return state;
    }
}
