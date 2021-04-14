import styled from 'styled-components';
import { IoApps } from 'react-icons/io5'

export const IconApps = styled(IoApps)`
  height: 20px;
`;

interface Props {
  bgcColor: string;
}

export const Avatar = styled.div<Props>`
  margin: 8px;
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

export const Container = styled.div`
  height: 64px;
  background-color: #fff;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 8px;

  .left {
    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    display: flex;
    align-items: center;

    img {
      height: 40px;
      width: 40px;
      margin-right: 10px;
      object-fit: cover;
      /* animation: spin infinite 20s linear; */
    }

    h1 {
      font-size: 22px;
      font-weight: 600;
      color: #5f6368;
      margin-bottom: 1px;
    }
  }

  .input {
    position: relative;
    align-items: center;
    display: flex;
    width: 750px;

    margin-left: 30px;
    margin-right: 20px;

    .MuiSvgIcon-root {
      position: absolute;
      margin-top: auto;
      left: 20px;
      color: #5f6368;
    }

    input {
      background-color: #f1f3f4;
      padding: 15px 58px;
      border: none;
      font-size: 1rem;
      border-radius: 6px;
      max-width: 100%;
      width: 100%;
      transition: all 300ms ease;
      margin-right: 70px;

      @media screen and (max-width: 1300px) {
        margin-right: 0px;
      }

      &::placeholder {
        color: rgba(0,0,0,0.54);
      }

      &:focus {
        background-color: #fff;
        box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.3);
      }
    }
  }

  .right {
    display: flex;
  }
`;
