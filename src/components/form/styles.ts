import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 30px;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  gap: 10px;

  .title {
    font-size: 16px;
    font-weight: bold;
  }

  .input {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ddd;
    border-radius: 4px;
  }

  .button {
    width: 100%;
    padding: 10px;
    background: #4b0082;
    color: white;
    border: none;
    border-radius: 4px;
    margin-top: 10px;
    cursor: pointer;

    &:hover {
      background-color: #45a049;
    }
  }
`;
