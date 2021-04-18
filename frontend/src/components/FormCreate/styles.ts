import styled from 'styled-components';

export const Card = styled.div`
  font-family: "Roboto";
  color: #202124;
  font-size: 1rem;
  margin-top: 20px;
  width: 60%;
  position: relative;
  display: flex;

  .textareaQuestion {
    margin-bottom: 16px;
    margin-right: 50px;
    width: 100%; 

    textarea {
      border: none;
      width: 100%;
      color: #202124;
      font-size: 1rem;
      font-weight: 500;
      height: 55px;
      font-family: "Roboto";
      flex: 1;
      padding: 20px 0px 0px 10px;
      background-color: #f8f9fa;

      resize: none;
      outline: none;
      white-space: pre-wrap;
      word-wrap: break-word;
      overflow-y: visible;
      overflow-x: hidden;

      display: block;

      &::placeholder {
        color: #afa2aa;
      }
                
      &:focus {
        background-color: #f1f3f4;
      }

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

  .MuiSelect-select {   
    .MuiSvgIcon-root {
      color: #5f6368;
      margin-right: 10px;
      margin-bottom: 2px;
    }
  }

  .card {
    width: 100%;
    box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.1);
    border-radius: 10px;
    background-color: #fff;
    padding: 22px 24px 8px 24px;

    .titleQuestion {
      display: flex;

      .MuiSelect-outlined.MuiSelect-outlined {
        display: flex;
        align-items: center;
        width: 350px;  
        height: 2px; 
        
        span {
          color: #202124;
          font-size: 14px;
          font-family: 'Roboto';
        }
      }

      p {
        font-size: 1rem;
        line-height: 24px;
        margin-right: auto;
      }
    }

    .short {
      margin-top: 20px;
      margin-bottom: 50px;

      input {
        color: #202124;
        font-size: 14px;
        height: 42px;
        font-weight: 400;
        font-family: "Roboto";
        flex: 1;
        width: 50%;

        resize: none;
        outline: none;
        white-space: pre-wrap;
        word-wrap: break-word;
        overflow-y: visible;
        overflow-x: hidden;

        background-color: transparent;
        border: none;
        border-bottom: 1px dotted rgba(0,0,0,0.3);
        display: block;
                  
        height: 24px;

        &::placeholder {
          color: #70757a;
        }   
      }
    }

    .paragraph {
      margin-top: 20px;
      margin-bottom: 50px;

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
        border-bottom: 1px dotted rgba(0,0,0,0.3);
        display: block;
                  
        height: 24px;

        &::placeholder {
          color: #70757a;
        } 
      }
    }

    .questions {
      display: flex;
      flex-direction: column;

      .question {
        margin-top: 5px;
        margin-bottom: 15px;
        display: flex;
        align-items: center;

        &:hover {
          .deleteBtn {
            opacity: 1;
          }
        }
        
        .deleteBtn {
          transition: all 300ms ease;
          display: flex;
          opacity: 0;
        }
        
        .inputQuestion {
          margin-right: 50px;
          margin-top: 3.2px;
          width: 100%; 

          input {
            border: none;
            width: 100%;
            color: #202124;
            font-size: 1rem;
            font-weight: 500;
            font-family: "Roboto";
            flex: 1;
            padding: 4px 0px;

            resize: none;
            outline: none;
            white-space: pre-wrap;
            word-wrap: break-word;
            overflow-y: visible;
            overflow-x: hidden;

            display: block;

            &::placeholder {
              font-size: 1rem;
              font-weight: 400;
            }

            &:hover + .linesQuestion .lineQuestion {
              opacity: 1;
            }

            &:focus + .linesQuestion .lineQuestion2 {
              width: 100%;
            }
          }

          .linesQuestion {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            
            .lineQuestion {
              transition: all 200ms ease;
              width: 100%;
              background-color: #e0e0e0;
              height: 1px;
              opacity: 0;
              z-index: 998;
            }

            .lineQuestion2 {
              transition: all 300ms cubic-bezier(0.4, 0, 0.4, 1);
              position: absolute;
              background-color: #673ab7;
              height: 2px;
              width: 0px;
              z-index: 999;
            }
          }
        }

        .input {
          min-width: 140px;
          display: flex;
          align-items: center;
        }

        .circle {
          min-height: 20px;
          min-width: 20px;
          font-size: 14px;
          border-radius: 50%;
          border: 2px solid #bdbdbd;
          margin-right: 8px;
        }

        p {
          color: #202124;
          font-weight: 400;
        }
      }

      .buttonAddNew {
        display: flex;
        align-items: center;
        width: 100%;
        margin-top: 4px;

        button {
          background-color: transparent;
          outline: none;
          cursor: pointer;
          font-size: .95rem;
          font-weight: 400;
          color: gray;
          border: none;
          padding: 0px 0px 2px 0px;
          position: relative;

          &:hover .line {
            opacity: 1;
          }

          .line {
            opacity: 0;
            position: absolute;
            transition: all 200ms ease;
            width: 100%;
            background-color: #e0e0e0;
            height: 1px;
            bottom: -3px;
            z-index: 998;
          }
        }

        .circle {
          height: 20px;
          width: 20px;
          font-size: 14px;
          border-radius: 50%;
          border: 2px solid #bdbdbd;
          margin-right: 8px;
        }
      }
    }

    .delete {
      margin-top: 20px;
      margin-bottom: 0px;
      width: 100%;
      display: flex;
      flex-direction:column;

      .divisor {
        height: 1px;
        width: 100%;
        background-color: #e0e0e0;
      }

      .buttons {
        margin-top: 5px;
        margin-left: auto;

        .add {
          display: none;
        }
      }
    }
  }
`

export const Title = styled.div`
  margin-top: 20px;
  width: 60%;

  .cardContainer {
    width: 100%;
    box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.1);
    border-radius: 10px;

    .cardCreate {
      .card {
        background-color: #fff;
        padding: 22px 24px 24px 24px;
        border-radius:  10px;
        position: relative;

        .textareaTitle {
          margin-bottom: 16px;

          textarea {
            border: none;
            width: 100%;
            color: #202124;
            font-size: 32px;
            height: 42px;
            font-weight: 400;
            font-family: "Roboto";
            flex: 1;

            resize: none;
            outline: none;
            white-space: pre-wrap;
            word-wrap: break-word;
            overflow-y: visible;
            overflow-x: hidden;

            background-color: transparent;
            display: block;
                      
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

        .textareaDescription {
          margin-bottom: 8px;

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
      
        .leftBar {
          position: absolute;
          bottom: 0px;
          top: 10px;
          left: 0px;
          background-color: #4285f4;
          width: 6px;
          height: calc(100% - 10px);
          border-bottom-left-radius:  15px;
        }
      }
    }
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: auto;
  height: 100vh;

  ${Card}:last-child {
    padding-bottom: 130px;

    .delete {
      .buttons {
        display: flex;
        .add {
          display: flex;
        }
      }
    }
  }
`;