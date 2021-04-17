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

  .recentForms {
    width: 68%;
    display: flex;
    overflow-x: auto;

    a {
      text-decoration: none;
      margin: 3px;
    }

    ::-webkit-scrollbar {
    width: 10px;
    height: 8px;
    }
    ::-webkit-scrollbar-thumb {
    background: #e2e2e2;
    border-radius: 7px;
    }
    ::-webkit-scrollbar-thumb:hover{
    background: #D6D6D6;
    cursor: all-scroll;
    }
    ::-webkit-scrollbar-track{
    border-radius: 9px;
    box-shadow: inset -30px -30px 0px #f1f1f1;
    }
  }
`;

export const FormContainer = styled.div`
  width: 200px;
  border: 1px solid #e2e2e2;
  cursor: pointer;
  transition: 300ms ease all;

  &:hover {
    border: 1px solid #8430ce;
  }

  .gray {
    width: 198px;
    background-color: #e2e2e2;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px 14px;

    img {
      height: 100px;
    }
  }

  .content {
    padding: 10px 14px;

    .title {
      color: #464a4e;
      font-size: 14px;
      margin-left: 4px;
      margin-bottom: 2px;

      width: 160px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .infos {
      display: flex;
      align-items: center;
      justify-content: space-between;

      p {
        font-size: 12px;
        color: #80868b;
      }

      .list {
        color: #8430ce;
      }

      .dots {
        color: #5f6368;
      }
    }
  }
`;

export const Header = styled.div`
  width: 68%;
  padding: 6px 8px 6px 2px;
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
