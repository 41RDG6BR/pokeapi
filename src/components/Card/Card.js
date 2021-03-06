import React from 'react';
import typeColors from '../../helpers/typeColors'
import './style.css';

function Card({ pokemon }) {
    console.log(pokemon)
    return (
        <div className="Card">
            <div className="Card__img">
                <img src={pokemon.sprites.front_default} alt="" />
            </div>
            <div className="Card__name">
                {pokemon.name}
            </div>
            <div className="Card__types">
                {
                    pokemon.types.map(type => {
                        return (
                            <div className="Card__type" style={{ backgroundColor: typeColors[type.type.name] }}>
                                {type.type.name}
                            </div>
                        )
                    })
                }
            </div>
            <div className="Card__info">
                <div className="Card__data Card__data--weight">
                    <p className="title">hp</p>
                    <p>{pokemon.stats[5].base_stat}</p>
                </div>
                <div className="Card__data Card__data--weight">
                    <p className="title">Attack</p>
                    <p>{pokemon.stats[4].base_stat}</p>
                </div>
                 <div className="Card__data Card__data--weight">
                    <p className="title">Defense</p>
                    <p>{pokemon.stats[4].base_stat}</p>
                </div>
                <div className="Card__data Card__data--ability">
                    <p className="title">Ability</p>
                    <p>{pokemon.abilities[0].ability.name}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;
