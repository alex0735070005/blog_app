const initialState = {
    data: {
        id: '',
        title: '',
        data_update: '',
        likes: '',
        description: '',
        user: { 
            id: '',
            name: ''
        },
    },
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_POST':
            return {
                ...state,
                data: action.post,
            }
    
        default: return state;
    }
}
