import React, { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { Container } from './styles';
import { useLocation, useNavigate } from 'react-router-dom';

export const UserForm = () => {
  const { state } = useLocation();
  const user = state?.user || {};
  const fromEditButton = state?.fromEditButton || false;

  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    Developer: '',
    favorite_game: '',
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (fromEditButton) {
      setFormData({
        name: user.name || '',
        age: user.age || '',
        email: user.email || '',
        Developer: user.Developer || '',
        favorite_game: user.favorite_game || '',
      });
    }
  }, [fromEditButton, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let response;

      if (user.id) {
        response = await api.put(`/users/${user.id}`, formData);
      } else {
        response = await api.post('/users', formData);
      }

      navigate('/');
    } catch (error) {
      console.error('Erro ao enviar os dados:', error);
    }
  };

  return (
    <Container>
      <h2>Player registration</h2>
      <form onSubmit={handleSubmit}>
        <span className="title">Name</span>
        <input
          className="input"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <span className="title">Age</span>
        <input
          className="input"
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
        <span className="title">Email</span>
        <input
          className="input"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <span className="title">Developer</span>
        <input
          className="input"
          type="text"
          name="Developer"
          value={formData.Developer}
          onChange={handleChange}
        />
        <span className="title">Favorite Game</span>
        <input
          className="input"
          type="text"
          name="favorite_game"
          value={formData.favorite_game}
          onChange={handleChange}
        />
        <button className="button" type="submit">
          Register
        </button>
      </form>
    </Container>
  );
};
