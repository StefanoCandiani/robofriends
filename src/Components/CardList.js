import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
    const cardsArray = robots.map((user, i) => {
        return(
            <Card id={robots[i].id} name={robots[i].name} email={robots[i].email} key={robots[i].id}/>
        );
    })
    return(
        <div>
            {cardsArray}            
        </div>
    );
}

export default CardList;