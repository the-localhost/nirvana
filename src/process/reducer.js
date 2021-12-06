const initialState = {
    token: null,
    user: null,
    item: null,
    playing: false,
    playlists:[],
}

const reducer = (state=initialState, action) => {
    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        default:
            return state;
    }
}

export default reducer
export {initialState};