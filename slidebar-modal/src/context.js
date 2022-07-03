import { createContext, useContext } from 'react';

let Context = createContext();

let ContextProvider = Context.Provider

let useConsumeContext = () => {
    return useContext(Context);
}

export {ContextProvider, useConsumeContext};
