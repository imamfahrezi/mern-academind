/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import './UserItem.css';

function UserItem(props) {
  return (
    <li className="user_item">
      <div className="user-item__content">
        <div className="user-item__image">
          <img src={props.image} alt={props.name} />
        </div>
        <div className="user-item__info">
          <h2>{props.name}</h2>
          <h3>
            {props.placesCount} {props.placesCount === 1 ? 'Place' : 'Places'}
          </h3>
        </div>
      </div>
    </li>
  );
}

export default UserItem;
