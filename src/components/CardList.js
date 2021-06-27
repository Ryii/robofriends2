import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
    if (robots.length === 0) {
        return <p style={{height: 100}}>No matching robots</p>
    }
    return (
        <div>
            {
                robots.map((user, i) => {
                    return <Card key={user.id - 1} id={user.id} name={user.name} email={user.email}/>
                })
            }
        </div>
    );
}

export default CardList;