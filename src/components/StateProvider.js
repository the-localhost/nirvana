import React, {createContext, useContext, useReducer} from 'react';

export const StateContext = createContext();

function StateProvider({initialState, reducer, children}) {
    return (
        <StateContext.Provider value={useReducer(reducer, initialState)}>
            { children }
        </StateContext.Provider>
    )
}

export default StateProvider;