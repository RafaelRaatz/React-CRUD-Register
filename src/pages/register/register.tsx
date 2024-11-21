import React from 'react';
import { GlobalStyle } from '../../styles/global';
import { Header } from '../../components/header';
import { UserForm } from '../../components/form';
import { Container } from './styles';

export function Register() {
  return (
    <>
      <Container>
        <Header hideButton={true} title="Add New Players" />
        <UserForm />
        <GlobalStyle />
      </Container>
    </>
  );
}
