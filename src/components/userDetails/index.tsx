import React from 'react';
import { FaUser, FaUserEdit } from 'react-icons/fa';
import { Container } from './styles';
import { useNavigate } from 'react-router-dom';

interface IUser {
  user: {
    name: string;
    email: string;
    age: number;
    Developer: string;
    favorite_game: string;
  };
}

export function UserDetails({ user }: IUser) {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate('/register', { state: { fromEditButton: true, user } });
  };

  return (
    <Container>
      <div className="header-details">
        <h1>Player Details</h1>
      </div>
      <div className="details">
        <div className="header-infos">
          <div className="img">
            <FaUser className="user-icon" />
          </div>
          <span>
            <b>{user.name}</b>
          </span>
        </div>
        <div className="user-infos">
          <span>
            <b>Age:</b> {user.age}
          </span>
          <span>
            <b>Developer:</b> {user.Developer}
          </span>
          <span>
            <b>Favorite Game:</b> {user.favorite_game}
          </span>
          <span>
            <b>Email:</b> {user.email}
          </span>
        </div>
        <button className="details-button" onClick={handleEdit}>
          <FaUserEdit className="icon-button" /> Editar
        </button>
      </div>
    </Container>
  );
}
