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
  position: relative;
  z-index: 999;
  
  .error {
    position: relative;
    margin-left: 10px;
    z-index: 999;

    &:hover {
      .errorMessage {
        opacity: 1;
        display: flex;
      }
    }

    .MuiSvgIcon-root {
      color: #e63946;
    }

    .errorMessage {
      display: none;
      opacity: 0;
      background-color: #212121;
      min-width: 200px;
      position: absolute;
      top: 46px;

      p {
        color: #f1f1f1;
        font-size: 1rem;
        padding: 12px;
      }
    }
  }

  .success {
    position: relative;
    margin-left: 10px;
    z-index: 999;

    &:hover {
      .successMessage {
        opacity: 1;
        display: flex;
      }
    }

    .MuiSvgIcon-root {
      color: #64f683;
    }

    .successMessage {
      display: none;
      opacity: 0;
      background-color: #212121;
      min-width: 170px;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 46px;

      p {
        color: #f1f1f1;
        font-size: 0.9rem;
        padding: 10px;
      }
    }
  }

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
      animation: spin infinite 20s linear;
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

interface Props {
  bgcColor: string;
}

export const Avatar = styled.div<Props>`
  margin: 8px;
  min-height: 32px;
  min-width: 32px;
  height: 32px;
  width: 32px;
  border-radius: 50%;
  background-color: ${props => props.bgcColor || '#767F8C'};
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    color: #fff;
    font-size: 1rem;
    position: relative;
    bottom: 1.51px;
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
  transition: 100ms ease all;
  margin: 0px 6px 0px 6px;

  &:hover {
    filter: brightness(1.1)
  }

  &:active {
    transform: scale(0.98);
    filter: brightness(0.9)
  }
`  