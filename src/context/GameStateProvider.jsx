import { createContext, useState } from 'react';

export const GameStateContext = createContext();

const GameStateProvider = (props) => {
    const [counter, setCounter] = useState(0);

    return (
        <GameStateContext.Provider value={[counter, setCounter]}>
            {props.children}
        </GameStateContext.Provider>
    );
};


export default GameStateProvider;