import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow-y: auto;
  height: 100vh;

  .noResponses {
    font-family: "Roboto";
    color: #202124;
    box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.1);
    
    margin-top: 20px;
    width: 60%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    padding: 24px 24px 24px 24px;
    border-radius: 6px;  

    p {
      font-size: 12px;
      color: #70757a;
    }  
  }

  .list {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;

    .answer {
      font-family: "Roboto";
      color: #202124;
      font-size: 1rem;
      box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.1);

      /* border: 1px solid #dadce0; */

      margin-top: 20px;
      width: 60%;
      position: relative;
      display: flex;
      flex-direction: column;
      background-color: #fff;
      padding: 24px 24px 28px 24px;
      border-radius: 6px;

      .firstP {
        font-size: 17px;
        margin-bottom: 4px;
      }

      .secondP {
        font-size: 13px;
        margin-bottom: 26px;
      }

      .response {
        background-color: #f8f9fa;
        padding: 8px 6px;
        margin: 2px;
        font-size: 14px;
        border-radius: 6px;
      }
    }

    .answer:last-child {
      margin-bottom: 130px;
    }
  }
`;

export const Counter = styled.div`
  font-family: "Roboto";
  color: #202124;
  font-size: 1rem;
  box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.1);
  
  margin-top: 20px;
  width: 60%;
  position: relative;
  display: flex;
  background-color: #fff;
  padding: 24px 24px 50px 24px;
  border-radius: 6px;

  h1 {
    font-size: 28px;
    font-weight: 400;
    margin-right: auto;
  }

  .MuiButtonBase-root {
    height: 32px;
    width: 32px;
    flex-shrink: 1;

    .chart {
      color: #64f683;
    }
  }
`;
