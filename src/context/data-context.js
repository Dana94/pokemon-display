import React, { useState } from 'react';
// import { useQuery, gql } from '@apollo/client';

// const POKEMON_QUERY = gql`
//     query getPokemon {
//         getPokemonDetailsByName(pokemon: eevee reverse: true take: 1) {
//             num
//             sprite
//         }
//     }
// `;

export const DataContext = React.createContext({
    pokemon: {},
    isLoading: false
});

const DataContextProvider = props => {
    const [pokemon, setPokemon] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    // const { loading, error, data } = useQuery(POKEMON_QUERY);

    // const setPokemonHandler = pokemon => {
    //     setPokemon(pokemon);
    // }

    // if (loading) {
    //     console.log(loading)
        // setIsLoading(loading);
    // }
    // if (error) return <DataContext.Provider value={{ pokemon: pokemon }}><p>Error :(</p></DataContext.Provider>;
    // if (data) {
    //     console.log(data)
    //     setPokemonHandler(data.getPokemonDetailsByName)
    // }
    return (
        <DataContext.Provider value={{ pokemon: pokemon }}>
            {props.children}
        </DataContext.Provider>
    )

}

export default DataContextProvider;
