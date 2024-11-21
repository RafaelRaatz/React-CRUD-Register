import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid;
  border-radius: 10px;
  width: 650px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 40px;

  .information {
    display: flex;
    gap: 20px;
    align-items: center;

    .img {
      width: 60px;
      height: 60px;
      border-radius: 100%;
      background-color: #000;
      display: flex;
      justify-content: center;
      align-items: center;

      .user-icon {
        width: 25px;
        height: 25px;
        color: #4b0082;
      }
    }

    .details {
      display: flex;
      flex-direction: column;
      gap: 8px;

      .name {
        font-weight: bold;
      }

      .infos {
        display: flex;
        gap: 8px;
      }
    }
  }

  .buttons {
    display: flex;
    gap: 10px;

    .delete-button {
      height: 30px;
      width: 30px;
      color: white;
      background: #861d1d;
      border: none;
      border-radius: 10px;
    }

    .card-button {
      height: 30px;
      width: 150px;
      color: white;
      background: #4b0082;
      border: none;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 5px;

      .icon-button {
        width: 20px;
        height: 20px;
      }
    }
  }
`;
