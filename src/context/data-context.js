import React, { useState } from 'react';

export const DataContext = React.createContext({
    pokemon: { name: 'Eevee' }
});

const DataContextProvider = props => {
    const [pokemon, setPokemon] = useState({name: 'Eevee'});

    return (
        <DataContext.Provider value={{ pokemon: pokemon }}>
            {props.children}
        </DataContext.Provider>
    )
}

export default DataContextProvider;
