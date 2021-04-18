import styled from 'styled-components';

export const Container = styled.div`
  background-color: #f1f1f1;
  /* height: 200px; */
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Texts = styled.div`
  display: flex;
  align-items: center;
  height: 4rem;
  width: 68%;
  padding: 0px 8px;

  h1 {
    font-size: 1rem;
    color: #202124;
    width: 100%;
    margin-bottom: 3.5px;
    font-weight: 600;
  }
`;

export const Docs = styled.div`
  display: flex;
  width: 68%;
  padding-bottom: 26px;
`;

export const Doc = styled.div`
  .image {
    border: 1px solid #dadce0;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    height: 114px;
    width: 152px;
    cursor: pointer;

    img {
      border-radius: 4px;
      height: 100%;
      width: 100%;
    }
  
    &:hover {
      border: 1px solid #7248b9;
    }
  }

  .text {
    h1 {
      color: #202124;
      font-size: 14px;
      padding: 8px 0px;
    }
  }
`;