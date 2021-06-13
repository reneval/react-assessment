import styled from 'styled-components';

export const Task = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  margin: auto;
`;
export const Content = styled.div`
  text-align: justify;
`;
export const StyledList = styled.ol`
  text-align: justify;
  
  li {
    line-height: 2;
  }
`;
export const Heading = styled.h1`
  color: #216298;
`;
export const DesignList = styled.div`
  display: flex;
  flex-direction: column;

  > div {
    display: flex;
    flex-direction: column;
  }

  img {
    width: 80%;
    margin: 0 auto;
  }
`;
