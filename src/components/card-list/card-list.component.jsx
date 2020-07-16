import React from 'react';
import { Cards } from '../cards/cards.component';

import './card-list.styles.css';


export const CardList = props => (
    //console.log(props);
 <div className='card-list'>
    { props.monsters.map( x=>(
    <Cards key = {x.id} x={x} />
  ))}
  </div>
    );