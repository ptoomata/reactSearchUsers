import React from 'react';

const Cards = ({ name, email, id }) => {
    return(
        <div className='tc bg-light-green pa2 dib  ma2 grow shadow-5'>
            <img alt='robo' src={`https://robohash.org/${id}$?size=200x200`}></img>
            <h1>{name}</h1>
            <p>{email}</p>
        </div>
    );
}

export default Cards;