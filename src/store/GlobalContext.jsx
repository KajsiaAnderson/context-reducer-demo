import { createContext, useReducer, useState } from "react";

const GlobalContext = createContext()

let initialState = {
    name: 'Kobe',
    age: 0,
    isCool: false
}

const GlobalContextProvider = (props) => {
    // const [name, setName] = useState("Bobby")

//     return(
//         <GlobalContext.Provider value={{name, setName}}>
//             {props.children}
//         </GlobalContext.Provider>
//     )
// }

//whatever is between GlobalContextProdiver is the child... so in index.js... App.js is the child of GlobalContext.jsx.

    const reducer = (state, action) => {
        switch(action.type){
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    return(
        <GlobalContext.Provider value={{state, dispatch}}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalContext
export {GlobalContextProvider}