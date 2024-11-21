import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid;
  border-radius: 10px;
  gap: 10px;
  align-items: center;
  padding-top: 10px;

  .header-details {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid;
    padding-bottom: 10px;
  }

  .details {
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;

    width: 320px;
    padding: 20px;

    .header-infos {
      display: flex;
      gap: 20px;
      align-items: center;
      justify-content: center;
      flex-direction: column;

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
    }

    .user-infos {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .details-button {
      height: 40px;
      width: 130px;
      color: white;
      background: #4b0082;
      border: none;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;

      .icon-button {
        font-size: 20px;
      }
    }
  }
`;
