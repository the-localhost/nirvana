import React, {createContext, useContext, useReducer} from 'react';

const StateContext = createContext();

// this is the datalayer to provide state to all components
// along with the ability to make changes
function StateProvider({initialState, reducer, children}) {
    return (
        <StateContext.Provider value={useReducer(reducer, initialState)}>
            { children }
        </StateContext.Provider>
    )
}

export default StateProvider;
export {StateContext};