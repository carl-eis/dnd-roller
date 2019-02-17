import styled from 'styled-components';
import background from '~/assets/background.jpg';

export const Row = (styled.div)<{ even?: boolean }>`
  display: flex;
  // flex: 1 1 auto;
  flex-direction: row;
  justify-content: flex-start;
  box-sizing: border-box;
  ${({ even }) => even ? 'justify-content: space-between;' : ''}
  flex-wrap: wrap;
`;

export const TablePositioner = (styled.div)<any>`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
  position: relative;
  margin-top: 1rem;
`;

export const PageInnerContent = (styled.div)<any>`
  flex: 1;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
`;

export const ButtonsContainer = (styled.div)<any>`
  & button {
    margin: 0.5rem 0.5rem 0 0;
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
  // overflow-y: scroll;
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
