import React from 'react';
import { Container } from './styles';
import { AiFillPlusCircle } from 'react-icons/ai';

export function Header({ hideButton, title }) {
  return (
    <Container>
      <div className="header">
        <div className="header-left">
          <img src="./logo.png" alt="" />
          <h2>{title}</h2>
        </div>
        {!hideButton && (
          <a href="/register">
            <button className="header-button">
              {' '}
              <AiFillPlusCircle className="icon-button" /> Add Player
            </button>
          </a>
        )}
      </div>
    </Container>
  );
}
