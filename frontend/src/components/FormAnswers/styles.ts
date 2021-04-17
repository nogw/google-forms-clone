import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: auto;
  height: 100vh;

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
      
      margin-top: 20px;
      width: 60%;
      position: relative;
      display: flex;
      flex-direction: column;
      background-color: #fff;
      padding: 24px 24px 50px 24px;
      border-radius: 6px;

      h1 {
        font-weight: 400;
      }
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
