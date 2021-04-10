import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .noForms {
    margin-top: 30px;
    width: 68%;
    box-shadow: 0px 1px 3px rgba(0,0,0,.1);
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 40px;

    h1 {
      color: #222222;
      font-size: 18px;
    }

    p {
      color: #888888;
      font-size: 1rem;
    }
  }
`;

export const Header = styled.div`
  width: 68%;
  padding: 6px 8px;
  display: flex;
  align-items: center;
  
  h1 {
    margin-right: auto;
    color: #202124;
    font-size: 1rem;
  }

  .right {
    display: flex;
    
    .button {
      display: flex;

      button {
        border-radius: 50%;
        background-color: transparent;
        border: none;
        height: 38px;
        margin-left: 6px;
        width: 38px;
        cursor: pointer;
        transition: all 200ms ease;

        &:active {
          transform: scale(0.9)
        }

        &:hover {
          background-color: #f3f3f3;
        }

        &:hover > .popup {
          opacity: 1;
        }
      }
    }
  }
`;
