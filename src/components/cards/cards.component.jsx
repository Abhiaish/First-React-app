import React from 'react';
import '../cards/cards.styles.css';

export const Cards =(props)=>(
    <div className="card-container">
        <img alt="monster" src={`https://robohash.org/${props.x.id}?set=set2&size=180x180`} />
        <h2>{props.x.name} </h2>
        <p>{ props.x.email }</p>
    </div>
)
