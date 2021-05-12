import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';

const POKEMON_QUERY = gql`
    query getPokemon {
        getPokemonDetailsByName(pokemon: eevee reverse: true take: 1) {
            num
            sprite
        }
    }
`;

export const DataContext = React.createContext({
    pokemon: { name: 'Eevee' },
});

const DataContextProvider = props => {
    const [pokemon, setPokemon] = useState({ name: 'Eevee' });

    const { loading, error, data } = useQuery(POKEMON_QUERY);

    if (loading) return <DataContext.Provider value={{ pokemon: pokemon }}><p>Loading...</p></DataContext.Provider>;
    if (error) return <DataContext.Provider value={{ pokemon: pokemon }}><p>Error :(</p></DataContext.Provider>;
    if(data) {
        setPokemon(data.getPokemonDetailsByName)
    }

    return (
        <DataContext.Provider value={{ pokemon: pokemon }}>
            {props.children}
        </DataContext.Provider>
    )
}

export default DataContextProvider;
