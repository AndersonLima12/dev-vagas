import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  max-width: 500px;

  h1 {
    color: white;
  }

  p {
    margin-top: 15px;
    line-height: 24px;
    color: white;
  }

  a {
    background: #752dd7;
    width: 100%;
    height: 45px;
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: center;

    color: #fff;
    font-weight: 900;
    text-transform: uppercase;
    border-radius: 7px;
    transition: background 0.2s;

    &:hover {
      background: #9239f9;
    }
  }
`;
