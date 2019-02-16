import styled from 'styled-components';
import background from '~/assets/background.jpg';

export const Row = (styled.div)<any>`
  display: flex;
  flex: 1 1 0;
  flex-direction: row;
  justify-content: flex-start;
`;

export const PageInnerContent = (styled.div)<any>`

`;

export const ButtonsContainer = (styled.div)<any>`
  & button {
    margin: 0 0.5rem;
  }

  &:first-child > button {
    margin-left: 0;
  }
`;

export const PageWrapper = (styled.div)<any>`
  background-color: rgba(255,255,255,0.8);
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  max-width: 60vw;
  margin: 3rem 0;
  padding: 2rem;
  border-radius: 0.25rem;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  overflow-y: scroll;
`;

export const PageContainer = (styled.div)<any>`
  display: flex;
  position: relative;
  flex-direction: row;
  width: 100%;
  height: 100vh;
  justify-content: center;
  box-sizing: border-box;
  background: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: fixed;
`;
