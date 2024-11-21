import React, { useEffect, useState } from 'react';
import { Container } from './styles';
import { Card, UserDetails } from '../';
import { api } from '../../services/api';

export function Main() {
  const [users, SetUsers] = useState<any[]>([]);
  const [userSelect, setUserSelect] = useState<any | null>(null);

  const getUsers = async () => {
    try {
      const response = await api.get('/users');
      const data = response.data;
      console.log(data);
      SetUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (userId) => {
    try {
      await api.delete(`/users/${userId}`);
      SetUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
      console.log('Usuário deletado com sucesso');
    } catch (error) {
      console.error('Erro ao deletar usuário:', error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const handleSelectUser = (user) => {
    setUserSelect(user);
  };

  return (
    <Container>
      <div className="list">
        <h1>All Players</h1>
        {users.map((user, key) => (
          <Card
            key={key}
            name={user.name}
            age={user.age}
            developer={user.Developer}
            onClick={() => handleSelectUser(user)}
            onDelete={() => handleDelete(user.id)}
          />
        ))}
      </div>
      {userSelect && <UserDetails user={userSelect} />}
    </Container>
  );
}
