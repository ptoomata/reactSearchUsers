import React from 'react';
import Cards from './Cards.js';

const CardList = ({ robots }) => {
    return (
        <div>
            {
                robots.map((user, i) => {
                    return <Cards
                        key={i}
                        name={robots[i].name}
                        id={robots[i].id}
                        email={robots[i].email} 
                        />
                })
            }
        </div>
    );
}

export default CardList;