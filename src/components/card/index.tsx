import React from 'react';
import { Container } from './styles';
import { FaUser, FaRegEye, FaTrash } from 'react-icons/fa';

interface IUser {
  name: string;
  age: number;
  developer: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onDelete: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export function Card({ name, age, developer, onClick, onDelete }: IUser) {
  return (
    <Container>
      <div className="information">
        <div className="img">
          <FaUser className="user-icon" />
        </div>
        <div className="details">
          <span className="name">{name}</span>
          <div className="infos">
            <span>
              <b>Age:</b> {age}
            </span>
            <b>| </b>
            <span> {developer} </span>
          </div>
        </div>
      </div>
      <div className="buttons">
        <button onClick={onClick} className="card-button">
          <FaRegEye className="icon-button" />
          Details
        </button>
        <button onClick={(e) => onDelete(e)} className="delete-button">
          <FaTrash className="icon-button" />
        </button>
      </div>
    </Container>
  );
}
