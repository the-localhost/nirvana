import React, {createContext, useContext, useReducer} from 'react';

const StateContext = createContext();

// this is a custom hook to get the context value
// getStateContextValue is more apt name, but we
// start hook's name with 'use', hence below name
const useStateContextValue = () => useContext(StateContext);

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
export {StateContext, useStateContextValue};