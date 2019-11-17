const initialState = {
    list: [],
}


export default (state = initialState, action) => {
    
    console.log('RUN POSTS REDUCER', action)

    switch (action.type) {
        case 'SET_POSTS':
            return {
                ...state,
                
                list: action.posts,
            }
    
        default: return state;
    }
}