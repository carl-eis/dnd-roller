import styled from 'styled-components';
import background from '~/assets/background.jpg';

import { media } from '~/core/styles';

export const Background = styled.div<any>`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
  justify-content: center;
  box-sizing: border-box;
  background: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;

  div * {
    box-sizing: border-box;
  }
`;

export const PageCard = styled.div<any>`
  background-color: rgba(255,255,255,0.8);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  flex: 1 1 100%;
  max-width: 60vw;
  margin: 3rem 0;
  padding: 2rem;
  border-radius: 0.25rem;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);

  ${media.phone`
    max-width: 100vw;
    padding: 0.25rem;
    border-radius: 0;
    margin: 0;
  `}
`;

export const PageCardContent = styled.div<any>`
  flex: 1 1 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow-y: scroll;
  padding: 5px;
`;

export const Row = styled.div<{ even?: boolean }>`
  flex: 1 auto auto;
  box-sizing: border-box;
`;

export const RowInner = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  ${media.phone`justify-content: center;`}
`;

export const TablePositioner = styled.div<any>`
  flex: 1 1 auto;
  width: 100%;
  margin-top: 1rem;
  min-height: 300px;
  max-height: 60vh;
  border: 5px solid red;
`;

export const ButtonsContainer = styled.div<any>`
  & button {
    margin: 0.5rem 0.5rem 0 0;
  }

  &:first-child > button {
    margin-left: 0;
  }
`;



export const SelectFieldWrapper = styled.div<any>`
  flex: 1 1 100%;
  margin: 0.75rem 0;
`;
