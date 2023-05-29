import { createContext, useState } from 'react';

//create a context, with createContext api
export const CounterContext = createContext();

const CounterProvider = (props) => {
        // this state will be shared with all components 
    const [counter, setCounter] = useState(0);

    return (
                // this is the provider providing state
        <CounterContext.Provider value={[counter, setCounter]}>
            {props.children}
        </CounterContext.Provider>
    );
};


export default CounterProvider;