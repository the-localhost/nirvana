const initialState = {
    token: 'BQCLcQvfonCvr8PvumtBa2pXKsC0QKd25rINIiziV2Tzc4KvUUD1pItpyd1N88AGrbUgJ4qq02yak_wjCpBapcZeA8Y',
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
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            }
        default:
            return state;
    }
}

export default reducer
export {initialState};