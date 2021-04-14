import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: auto;
  font-family: "Roboto";
  height: 100vh;
`;

export const Card = styled.div`
  margin-top: 20px;
  width: 60%;

  .card {
    width: 100%;
    box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.1);
    border: 1px solid #dadce0;
    background-color: #fff;
    padding: 22px 24px 24px 24px;
    border-radius: 10px;
    
    .short {
      margin-top: 20px;
      margin-bottom: 50px;
    }

    .paragraph {
      margin-top: 25px;

      textarea {
        color: #202124;
        font-size: 14px;
        height: 42px;
        font-weight: 400;
        font-family: "Roboto";
        flex: 1;
        width: 100%;

        resize: none;
        outline: none;
        white-space: pre-wrap;
        word-wrap: break-word;
        overflow-y: visible;
        overflow-x: hidden;

        background-color: transparent;
        border: none;
        display: block;
                  
        height: 24px;

        &:focus + .lines .line2 {
          width: 100%;
        }
      }

      .lines {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        
        .line {
          width: 100%;
          background-color: #e0e0e0;
          height: 1px;
        }

        .line2 {
          transition: all 300ms cubic-bezier(0.4, 0, 0.4, 1);
          position: absolute;
          background-color: #673ab7;
          height: 2px;
          width: 0px;
        }
      }
    }

    h1 {
      font-size: 16px;
      font-weight: 500;
      letter-spacing: .1px;
      line-height: 24px;
      margin-bottom: 20px;
      color: #202124;
      font-weight: 400;
      width: 100%;
      word-break: break-word;
    }

    .MuiTypography-root {
      font-size: 14px;
      font-weight: 400;
      letter-spacing: .2px;
      line-height: 20px;
      color: #202124;
      min-width: 1px;
    }
  }
`;

export const Title = styled.div`
  margin-top: 20px;
  width: 60%;

  .cardContainer {
    width: 100%;
    box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.1);
    border: 1px solid #dadce0;
    border-radius: 10px;

    .cardCreate {
      .card {
        background-color: #fff;
        padding: 22px 24px 24px 24px;
        border-radius:  10px;
        position: relative;

        .topBar {
          border-top-right-radius: 10px;
          border-top-left-radius:  10px;
          background-color: #673ab7;
          position: absolute;
          top: 0px;
          left: 0px;
          right: 0px;
          height: 10px;
        }
        
        h1 {
          font-size: 32px;
          font-weight: 400;
          line-height: 40px;
          color: #202124;
          line-height: 135%;
          max-width: 100%;
          min-width: 0%;
        }

        p {
          white-space: pre-wrap;
          font-size: 14px;
          font-weight: 400;
          letter-spacing: .2px;
          line-height: 20px;
          color: #202124;
          margin-top: 12px;
        }

        

      }
    }
  }
`