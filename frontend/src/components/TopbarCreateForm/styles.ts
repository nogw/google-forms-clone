import styled from 'styled-components';

export const Container = styled.div`
  height: 64px;
  background-color: #fff;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  padding-bottom: 8px;

  box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.1);

  .left {
    display: flex;
    align-items: center;
    margin-right: auto;

    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    img {
      height: 40px;
      width: 40px;
      margin-right: 10px;
      object-fit: cover;
      /* animation: spin infinite 20s linear; */
    }

    h1 {
      font-size: 18px;
      font-weight: 400;
      color: #202124;
      margin-right: 12px;
      margin-bottom: 2px;
    }
  }

  .MuiAvatar-root {
    margin: 8px;
    height: 32px;
    width: 32px;
  }
`;

export const ButtonSubmit = styled.button`
  background-color: #673ab7;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  padding: 0px 24px;
  line-height: 36px;
  border: none;
  color: #fff;
  cursor: pointer;
  transition: 300ms ease all;
  margin: 0px 6px 0px 6px;

  &:hover {
    filter: brightness(1.1)
  }

  &:active {
    transform: scale(0.9);
    filter: brightness(0.9)
  }
`  