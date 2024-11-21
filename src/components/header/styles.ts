import styled from 'styled-components';

export const Container = styled.header`
  background: #000000;
  border-bottom: 2px solid #7e638c;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 120px;
    margin: auto;
    width: 1280px;

    .header-left {
      display: flex;
      align-items: center;
      gap: 40px;
      color: white;

      img {
        width: 90px;
        height: 70px;
      }
    }

    .header-button {
      height: 40px;
      width: 150px;
      color: white;
      background: #4b0082;
      border: none;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 6px;

      .icon-button {
        font-size: 20px;
      }
    }
  }
`;
