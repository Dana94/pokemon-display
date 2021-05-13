import { useState, useEffect } from 'react';

import { useQuery, gql } from '@apollo/client';

const POKEMON_FUZZY_QUERY = gql`
    query ($pokemon: String!) {
        getPokemonDetailsByFuzzy(pokemon: $pokemon, reverse: true) {
            num
            species
        }
    }
`;

const Search = () => {
    const [input, setInput] = useState("");

    useEffect(() => {

    }, [input]);

    const { loading, error, data } = useQuery(POKEMON_FUZZY_QUERY,
        {
            variables: {
                pokemon: input
            }
        }
    );


    if (data) {
        console.log('found', data);
    }

    const inputHandler = event => {
        setInput(event.target.value)
    }

    return (
        <div>

            <input type="input" onChange={inputHandler} />
            {/* <ul>
                {
                    data.
                }
            </ul> */}
        </div>
    )
}

export default Search;
